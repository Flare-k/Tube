dotenv.config();
import dotenv from "dotenv";
import app from "./app"; // app.js에서 export default app했기 때문에 불러올 수 있다.
import "./db";
import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 80;

const handleListening = () => {
  console.log(`✅  Listening on: http://localhost:${PORT}`);
  // call-back함수.
  // PORT를 listen하기 시작할 때 함수를 호출해준다.
};

app.listen(PORT, handleListening);
