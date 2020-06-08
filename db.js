/* eslint-disable no-console */
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => {
  console.log("✅  Connected to DB");
};
const handleError = (error) =>
  console.log(`🔴 Error on DB Connection: ${error}`);

db.once("open", handleOpen); // connection을 열고 성공여부를 확인할 수 있는 function을 만들 것이다.
db.on("error", handleError);
