const User = require('../models/user');
exports.getLogin = (req, res, next) => {
  // console.log(req.get('Cookie').split('=')[1]);
  // const isLoggedIn = req.get('Cookie').split('=')[1]
  console.log(req.session);
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('60d1f752759da725ac7a2d11')
    .then((user) => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      // res.setHeader('Set-Cookie', 'isLoggedIn=true')
      req.session.save((err) => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch();
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};
