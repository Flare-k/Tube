import mongoose from "mongoose";
// video 댓글에 대한 Database

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  }, // 이러한 형태를 configuration object라 한다.
  createdAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  /*
    
    video: { //video와 comment를 연결하는 방법 #2
        type: mongoose.Schema.Types.ObjectId, //그 다음 어느 model에서 온 id인지 알려줘야 한다.
        ref: "Video"
    }
    */
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
