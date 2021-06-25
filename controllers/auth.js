exports.getLogin = (req, res, next) => {
  console.log(req.get('Cookie').split('=')[1]);
  const isLoggedIn = req.get('Cookie').split('=')[1]
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isLoggedIn
  });
};

exports.postLogin = (req,res,next)=> {
  res.setHeader('Set-Cookie', 'isLoggedIn=true')
  res.redirect('/')
}