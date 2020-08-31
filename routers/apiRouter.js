import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
  postDeleteComment,
  getCommentId,
} from "../controllers/videoController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.delComment, onlyPrivate, postDeleteComment);
apiRouter.get(routes.findCommentId, getCommentId);
export default apiRouter;
