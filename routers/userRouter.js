import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;




/*
userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));

여기서 원하는 라우터를 만들고 app.js에다가 
app.use("/user", userRouter)
이런식으로 사용하면 app.js에서 하나하나 라우터를 만드는 방법과 달리
/user라 필요한 라우터에 대한 라우터들을 모두 import할 수 있게 된다..
(ex, /user, /user/edit, /user/password ...)
*/