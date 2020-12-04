module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error_msg", "harap login untuk melihat halaman ini");
    res.redirect("/users/login");
  },
};
