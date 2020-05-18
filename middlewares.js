import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'my Youtube';
    res.locals.routes = routes;
    next();
};