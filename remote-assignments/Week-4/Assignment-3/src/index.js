import express from "express";
import session from "express-session";
import store from "./model/Session.js";
import isAuth from "./controller/auth.js";
import { memberGet, logoutGet, signupPost, signinPost } from "./controller/routeHandler.js";

const app = express();

const ip = "127.0.0.1";
const port = process.env.PORT || 3000;

app.use(
  session({
    secret: "assignment-3",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(express.urlencoded({ extended: true }));
app.set("views", "src/views");
app.set("view engine", "ejs");

// home page route
app.get("/", (req, res) => {
  res.render("home", { hint: "None" });
});

// member route
app.get("/member/:userId", isAuth, memberGet);

// logout route
app.get("/logout", logoutGet);

// signup post route
app.post("/signup", signupPost);

// signin post route
app.post("/signin", signinPost);

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
