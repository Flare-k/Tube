// DB 모델을 작성한다.
// Video 자체를 DB에 저장하진 않을 것이다. 즉, byte를 저장하는 것이 아니라 video의 link를 저장한다.
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required", // url이 없으면 오류메시지 출력
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0, // 비디오를 처음 생성하면 views를 0으로..
  },
  createdAt: {
    type: Date,
    default: Date.now, // 현재 날짜를 반환하는 function
  },
  // video와 comment를 연결하는 방법 #1
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, // 그 다음 어느 model에서 온 id인지 알려줘야 한다.
      ref: "Comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
// 이제 이 스키마를 이용하여 model을 만들어준다.
// 모델의 이름은 "Video"
const model = mongoose.model("Video", VideoSchema);
export default model;
// 모델이 만들어짐을 알리기 위해 init.js에 import해준다.
