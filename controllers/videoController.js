import routes from "../routes";
import Video from "../models/Video";

//db를 import 해주고 home에 async를 달아준다. async는 기다려주는 역할을 한다.
//javascript가 db를 다 못보고 그냥 지나갈 수도 있기 때문이다.
//javascript는 기본적으로 기다려주지 않는다.
//async: "JS야 이 function의 ~~부분은 꼭 기다려!" await이 있는 부분까지 기다린다.
export const home = async(req, res) => {
    try {
        const videos = await Video.find({}); //모든 비디오를 가져온다.
        res.render("home", { pageTitle: "Home", videos }); //render DB에 저장된 video의 내용을 보여준다
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

export const videoDetail = async(req, res) => {
    //console.log(req.params); params에 id가 있다는걸 알게 됨
    const {
        params: { id },
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch (error) {
        res.redirect(routes.home);
    }
};
export const getEditVideo = async(req, res) => {
    const {
        params: { id },
    } = req;
    try {
        const video = await Video.findById(id);
        //video를 받아서 render로 통해 템플릿으로 던져준다,
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
        // rendering하는 순간 템플릿에선 video의 title과 description을 던져준다.
    } catch (error) {
        res.redirect(routes.home);
    }
};
export const postEditVideo = async(req, res) => {
    const {
        params: { id },
        body: { title, description },
    } = req;
    try {
        //id를 찾아서 body를 얻어와야 한다. 비디오 수정에서 제목과 설명을 가져와야 하기 때문이다.
        //mongoose엔 우리의 id가 없어서 _id : id로 찾아줘야 한다.
        await Video.findOneAndUpdate({ _id: id }, { title, description }); //title:title == title
        //이렇게 하면 default로 얻어온 제목 및 내용을 수정하여 form을 전송하면 해당 내용으로 업데이트 된다.
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const deleteVideo = async(req, res) => {
    const {
        params: { id },
    } = req;
    try {
        await Video.findOneAndRemove({ _id: id });
    } catch (error) {}
    //삭제를 실패하던 성공하던 home으로 redirect한다.
    res.redirect(routes.home);
};