import routes from "../routes";
import Video from "../models/Video";

//db를 import 해주고 home에 async를 달아준다. async는 기다려주는 역할을 한다.
//javascript가 db를 다 못보고 그냥 지나갈 수도 있기 때문이다.
//javascript는 기본적으로 기다려주지 않는다.
//async: "JS야 이 function의 ~~부분은 꼭 기다려!" await이 있는 부분까지 기다린다.
export const home = async(req, res) => {
    try {
        const videos = await Video.find({}); //모든 비디오를 가져온다.
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
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
export const postUpload = async(req, res) => {
    //const {} 를 통해 body를 받아와 요청하는 정보들을 확인한다.
    //이는 pug와 db.js를 확인해야하는 듯 하다.
    const {
        body: { title, description },
        file: { path },
    } = req; //file에 path라는 요소가 있다.

    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description,
        //여기있는 fileUrl, title, description은 videoDB의 속성이다.
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id)); //id는 DB의 id
    //id는 mongoDB가 랜덤하게 만들어준다.
};

export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });