var express = require('express');
var router = express.Router({mergeParams: true});
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js')
var Course = require('../models/course.js')



router.get('/', function(req, res) {
  console.log(req.session)
  User.find({})
  .exec(function(err, users){
    if (err) { console.log(err); }
    res.render('users/index.hbs', {
      users: users,
      currentUser: req.session.currentUser
    })
  });
})

////Sign Up
router.get('/signup', function(req, res){
  res.render('users/signup.hbs')
});

///Show
router.get('/:id', authHelpers.authorize, function(req, res) {
  Course.find({})
    .exec(function(err, course) {
      if (err) { console.log(err); }

  User.findById(req.params.id)
  .exec(function(err, user, course) {
    if (err) console.log(err);
    console.log(user);
    // res.render('user/show.hbs', { user: user } );
    res.render('users/show.hbs', {
      user: user,
      course: course
    });
  });
  });
    });

///user login registered
router.post('/', authHelpers.createSecure, function(req, res){
  var user = new User({
    email: req.body.email,
    password_digest: res.hashedPassword
  });

  user.save(function(err, user){
    if (err) console.log(err);

    console.log(user);
    res.redirect('/users');
  });
});

module.exports = router;
