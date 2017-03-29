var express = require('express');
var router = express.Router({mergeParams:true});
var Course = require('../models/course.js');
var authHelpers = require('../helpers/auth.js');
var mongoose = require('mongoose');
var User = require('../models/user.js');

// index courses
router.get('/', function (req, res) {
    User.findById(req.params.userId)
        .exec(function(err, user) {
            if(err) console.log(err);
            console.log(user);
            res.render('courses/index.hbs', {
              user: user,
              courses: user.course
            });
        });
});

// new course
router.get('/new', function(req, res) {
    console.log(req.session.currentUser)
    res.render('courses/new', {
        currentUser: req.session.currentUser
    });
});
// create course
router.post('/', function(req, res) {
    User.findById(req.params.userId)
        .exec(function(err, user) {
            var newCourse = new Course({
                course_name: req.body.course_name,
                city: req.body.city,
                state: req.body.state,
                par: req.body.par,
                date_played: req.body.date_played
            });

            user.course.push(newCourse)
            user.save(function(err, user){
                if (err) { console.log(err); }
                console.log(user);
                console.log('TESTTESTTEST');
                res.redirect(`/users/${user.id}/courses`);
            });
        });
});

// show course
router.get('/:id', function(req, res) {
    User.findById(req.params.userId)
        .exec(function(err, user) {
            if(err) console.log(err);

            const course = user.course.id(req.params.id);
            console.log(course);

            res.render('courses/show', {
                course: course,
                user: user
            });
        });
});

//////////EDIT #2??
router.get('/:id/edit', function(req, res) {
 User.findById(req.params.userId)
   .exec(function (err, user){
     if (err) { console.log(err); }
     console.log(user);

     var editCourse = user.course.id(req.params.id);
     console.log(editCourse);
     // var editCourse = user.course.find(function (course) { return course.id === req.params.courseId })
     res.render('courses/edit', {
         course: editCourse,
         user: user
     });
   })
});
// update course
router.patch('/:id', function(req, res) {
    User.findById(req.params.userId)
        .exec(function(err, user) {
            if (err) { console.log(err); }
            console.log(user);

            const course = user.course.id(req.params.id)
            course.set(req.body)

            user.save()

            res.render('courses/show', {
                course: course,
                user: user
            });
        });
});

// delete course
// /users/:userId/courses  /:id
router.delete('/:courseId', function(req, res) {
    User.findById(req.params.userId)
        .exec(function(err, user) {
            if (err) { return console.log(err); }
            console.log( 'Course deleted.');

            const course = user.course.id(req.params.courseId)
            // course.set(req.body)
            course.remove()

            user.save()
            // redirect back to the index route
            res.redirect(`/users/${req.params.userId}/courses`);
        });
});



module.exports = router;
