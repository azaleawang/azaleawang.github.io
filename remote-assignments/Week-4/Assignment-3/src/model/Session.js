import mongoose from "mongoose";
import ConnectMongoDBSession from "connect-mongodb-session";
// const Schema = mongoose.Schema;
import session from "express-session";
const mongoURI = "mongodb://localhost:27017/sessions";

const MongoDBStore = ConnectMongoDBSession(session);
const store = new MongoDBStore({
  uri: mongoURI,
  collection: "mySessions",
});

export default store;
