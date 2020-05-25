import routes from "../routes";

// 회원가입 -> 완료 -> 홈화면으로 Redirect
export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 },
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // To Do: Register User
        // To Do: Log user in
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) =>
    res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

//로그아웃을 클릭하면 LogOut페이지로 가는 것 대신에, 로그아웃을 처리한 후
// home 페이지로 Redirect로 표현할 것이다.
//즉, 초반에 만들어둔 logout.pug는 삭제해도 좋다.
export const logout = (req, res) => {
    //res.render("logout", { pageTitle: "Logout" });
    res.redirect(routes.home);
};


export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
    res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
    res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "Change Password" });