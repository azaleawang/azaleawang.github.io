import express from "express";
import session from "express-session";
import { verifyMember, registerMember, getMemberInfo } from "./database.js";
import ConnectMongoDBSession from "connect-mongodb-session";
import isAuth from "./controller/auth.js";

const app = express();

const ip = "127.0.0.1";
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/sessions";

const MongoDBStore = ConnectMongoDBSession(session);
const store = new MongoDBStore({
  uri: mongoURI,
  collection: "mySessions",
});

app.use(
  session({
    secret: "assignment-3",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.set("view engine", "ejs");
// home page route
app.get("/", (req, res) => {
  res.render("home", { hint: "None" });
});

// member route
app.get("/member/:userId", isAuth, async (req, res) => {
  const queryId = req.params.userId;
  const { id, username, email } = await getMemberInfo(queryId);
  res.send(`
    <h1>Welcome! ${username}</h1>
    <h3>Personal information</h3>
    <ul>
      <li><b>Member Id:</b> ${id}</li>
      <li><b>Email:</b> ${email}</li>
    </ul>
    <button><a href='/logout'>登出</a></button>
    `);
});

// logout route
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

// signup post route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);

  let register = await verifyMember(email);
  console.log("register? ", register);
  if (register) {
    // email已存在 -> return to home
    res.render("home", { hint: "此帳號已經被註冊" });
  }

  // 帳戶名稱不存在-> insert data into DB
  const userId = await registerMember(username, email, password);
  console.log("Your user id =", userId);

  if (userId) {
    // 成功儲存資料並得到user id
    res.render("home", { hint: "使用者註冊成功，請登入網站" });
  } else {
    // DB fails to return user id
    res.render("home", { hint: "使用者註冊失敗，server發生錯誤" });
  }
});

// signin post route
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await verifyMember(email, password);
  if (user) {
    console.log("user", user);
    req.session.isAuth = true;
    req.session.email = user.email;
    req.session.userId = user.id;
    res.redirect(`/member/${user.id}`);
  } else {
    res.render("home", { hint: "帳號或密碼輸入錯誤" });
  }
});

// Middleware for handling 404 errors
app.use((req, res, next) => {
  res.redirect("/"); // Redirect to the root (home) page for 404 errors
});
// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("error occurs!");
});

app.listen(port, ip, () => {
  console.log(`Plz visit http://${ip}:${port}/`);
});
