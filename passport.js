import passport from "passport";
import User from "./models/User";

// passport에게 strategy(로그인 방식)를 사용하도록 요청한다.
// passportLocalMongooser가 제공하는 strategy를 이용한다. -> username과 password를 사용.
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
