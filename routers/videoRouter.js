import express from "express";
import routes from "../routes";
import {
    upload,
    videoDetail,
    editVideo,
    deleteVideo,
} from "../controllers/videoController";
//export const videoRouter = express.Router();  이렇게하면 이 변수만 export하게 된다.
const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);

videoRouter.get(routes.editVideo, editVideo);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;