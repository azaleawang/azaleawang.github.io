export default (req, res, next) => {
  if (req.session.isAuth && req.session.userId == req.params.userId) {
    delete req.session.error;
    next();
  } else {
    req.session.error = "You have to Login first";
    res.render("home", { hint: "請先登入" });
  }
};
