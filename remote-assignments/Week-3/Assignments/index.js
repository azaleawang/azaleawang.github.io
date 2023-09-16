const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(cookieParser());

// root path
app.get("/", (req, res) => {
  res.send("Hello My Server!");
});

// data path
app.get("/data", (req, res) => {
  let number = req.query.number;
  if (number === undefined) {
    res.send("Lack of Parameter");
  } else if (+number >= 0) {
    number = +number;
    console.log(number);
    res.send(`加總結果：${((number + 1) * number) / 2}`);
  } else {
    res.send("Wrong Parameter");
  }
});

// myName path
app.get("/myName", (req, res) => {
  console.log("Cookies: ", req.cookies);
  let userName = req.cookies.name;
  if (userName) {
    // show username id existed
    res.send(`Welcome, ${userName}`);
  } else {
    // render sign up page
    res.sendFile(path.join(__dirname + "/public/signUp.html"));
  }
});

// trackName path
app.get("/trackName", (req, res) => {
  // receive signup form input (get method)
  const userName = req.query.name;

  // store user's name in cookies
  res.cookie("name", userName);
  // redirect user to hmyName
  res.redirect("/myName");
});

app.listen(port, () => {
  console.log(`Plz visit http://localhost:${port}/`);
});

// Running Locally
// Run the app with the following command: `nodemon` or `npm run dev` or `npm run start`
