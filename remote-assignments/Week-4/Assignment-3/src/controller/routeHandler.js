import { verifyMember, registerMember, getMemberInfo } from "./dbHandler.js";

export async function memberGet(req, res) {
  const queryId = req.params.userId;
  const { id, username, email } = await getMemberInfo(queryId);
  res.render("member", { id, username, email });
}

export async function logoutGet(req, res) {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/");
  });
}

export async function signupPost(req, res) {
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
}

export async function signinPost(req, res) {
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
}
