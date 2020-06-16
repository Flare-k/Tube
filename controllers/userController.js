import passport from "passport";
import routes from "../routes";
import User from "../models/User";

// 회원가입 -> 완료 -> 홈화면으로 Redirect
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.redirect(routes.home);
    }
    // To Do: Register User
    // To Do: Log user in
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

// 깃허브 로그인
export const githubLogin = passport.authenticate("github");
// call back 받아오는 함수
export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  // callback 정보 확인용 console.log
  // console.log(accessToken, refreshToken, profile, cb);
  const {
    _json: { id, avatar_url: avatarUrl, name, email },
  } = profile;
  // profile 파라미터로 가져온 내용들
  // 파라미터로 받은 cb함수가 처리해준다. True->정보를 쿠키에.. False->error
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error, null);
  }
};

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  console.log(accessToken, refreshToken, profile, cb);
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};
// 로그아웃을 클릭하면 LogOut페이지로 가는 것 대신에, 로그아웃을 처리한 후
// home 페이지로 Redirect로 표현할 것이다.
// 즉, 초반에 만들어둔 logout.pug는 삭제해도 좋다.
export const logout = (req, res) => {
  // res.render("logout", { pageTitle: "Logout" });
  req.logout();
  res.redirect(routes.home);
};

export const getMe = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail", user: req.user });

// export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req; // req로 부터 params의 id가져오기
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
