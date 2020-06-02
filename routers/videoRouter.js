import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
//export const videoRouter = express.Router();  이렇게하면 이 변수만 export하게 된다.
const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Video Edit
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Video Delete
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;