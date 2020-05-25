import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
    const {
        query: { term: searchingBy },
    } = req; // == const searchingBy = req.query.term;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};

//upload 또한 upload를 준비하기 위한 get 페이지와 실제 데이터를 보내는 post 페이지가 필요하다.
export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
    //const {} 를 통해 body를 받아와 요청하는 정보들을 확인한다.
    //이는 pug와 db.js를 확인해야하는 듯 하다.
    const {
        body: { file, title, description },
    } = req;
    res.redirect(routes.videoDetail(324393));
};


export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });