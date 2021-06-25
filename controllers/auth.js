exports.getLogin = (req, res, next) => {
  // console.log(req.get('Cookie').split('=')[1]);
  // const isLoggedIn = req.get('Cookie').split('=')[1]
  console.log(req.session);
   console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isLoggedIn: false
  });
};

exports.postLogin = (req,res,next)=> {
  req.session.isLoggedIn = true
  // res.setHeader('Set-Cookie', 'isLoggedIn=true')
  res.redirect('/')
}