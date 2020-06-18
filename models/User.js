import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, // 그 다음 어느 model에서 온 id인지 알려줘야 한다.
      ref: "Comment",
    },
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId, // 그 다음 어느 model에서 온 id인지 알려줘야 한다.
      ref: "Video",
    },
  ],
});
// 이 상태에서 새로운 스키마를 추가한다.
// passportLocalMongoose는 configuration object가 필요하다.
// passportLocalMongoose의 옵션에 usernameField가 있다. 이는 username이 될 field를 명시해준다.
// passportLocalMongoose에게 어떤 Field를 username으로 사용할 것인지 알려줘야 한다.
// usernameField로 이메일을 사용하기로 하겠다.
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);
export default model;
