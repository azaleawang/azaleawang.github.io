import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "assignment",
  })
  .promise();

export async function verifyMember(email, password = undefined) {
  let user;
  if (password) {
    // 檢查登入資訊是否正確
    let sql = "SELECT * FROM user WHERE email = ? AND password = ?";
    [user] = await pool.query(sql, [email, password]);
  } else {
    // 檢查註冊帳號是否重複
    let sql = "SELECT * FROM user WHERE email = ?";
    [user] = await pool.query(sql, [email]);
  }
  console.log("user?", user);
  return user[0];
}

export async function registerMember(username, email, password) {
  let sql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
  console.log(username, email, password);
  const result = await pool.query(sql, [username, email, password]);
  // console.log(result[0].insertId);
  return result[0].insertId;
}

export async function getMemberInfo(id) {
  let sql = "SELECT * FROM user WHERE id = (?)";
  const result = await pool.query(sql, [id]);
  console.log("getMemberInfo", id, result);
  return result[0][0];
}
// const [res] = await pool.query("select * from users where username = ?", ['aaa']);
// console.log(res);
// verify_member("aa").then(console.log);
// register_member("eee", "e@gmail.com", "abce").then(console.log);
