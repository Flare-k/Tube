import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "videos/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "my Youtube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1,
    };
    next();
};

export const uploadVideo = multerVideo.single("videoFile");
//single에 들어간 videoFile은 upload.pug의 file 부분 input name