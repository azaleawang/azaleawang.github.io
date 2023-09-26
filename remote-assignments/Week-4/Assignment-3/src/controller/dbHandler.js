import dotenv from "dotenv";
import mysql from "mysql2";
import bcrypt from "bcryptjs";
dotenv.config();

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "assignment",
  })
  .promise();

export async function verifySignin(email, password) {
  // 檢查登入資訊是否正確
  const sql = "SELECT * FROM user WHERE email = ?";
  const [user] = await pool.query(sql, [email]);
  const hashPsw = user[0].password
  // console.log(hashPsw, password)
  if (hashPsw) {
    const correctPws = await bcrypt.compare(password, hashPsw);
    return correctPws ? user[0] : undefined;
  }
  return;
}

export async function verifyRegister(email) {
  // 檢查註冊帳號是否重複
  const sql = "SELECT * FROM user WHERE email = ?";
  const [user] = await pool.query(sql, [email]);
  return user[0];
}

export async function registerMember(username, email, password) {
  let sql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
  const hashPsw = await bcrypt.hash(password, 12);
  console.log(username, email, password, hashPsw);
  const result = await pool.query(sql, [username, email, hashPsw]);
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
