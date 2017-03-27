var express = require('express');
var router = express.Router({mergeParams:true});
var Course = require('../models/course.js');
var authHelpers = require('../helpers/auth.js');
var mongoose = require('mongoose');
var User = require('../models/user.js');

// index courses
router.get('/', function indexCourse(req, res) {
    User.findById(req.params.userId)
        .exec(function(err, user) {
            if(err) console.log(err);
            console.log(user);
            res.render('courses/index.hbs', {
                  user: user
            });
        });
});

// new course
router.get('/new', function(req, res) {
    res.render('courses/new');
});
// create course
router.post('/', function(req, res) {
    var course = new Course({
        course_name: req.body.course_name,
        city: req.body.city,
        state: req.body.state,
        par: req.body.par,
        date_played: req.body.date_played
    });
    course.save(function(err, course){
        if (err) { console.log(err); }
        console.log(course);
        res.render('courses/show', {
            course: course
        });
    });
});
// show course
router.get('/:id', function(req, res) {
    Course.findById(req.params.id)
        .exec(function(err, course) {
            if(err) console.log(err);
            console.log(course);
            res.render('courses/show', {
                course: course,
                user: user
            });
        });
});
// edit course
router.get('/:id/edit', function(req,res) {
    Course.findById(req.params.id)
    .exec(function(err, course) {
        if (err) { console.log(err); }
        res.render('courses/edit', {
            course: course
        });
    });
});
// update course
router.patch('/:id', function(req, res) {
    Course.findByIdAndUpdate(req.params.id, {
        course_name: req.body.course_name,
        city: req.body.city,
        state: req.body.state,
        par: req.body.par,
        date_played: req.body.date_played
    }, {new: true})
        .exec(function(err, course) {
            if (err) { console.log(err); }
            console.log(course);
            res.render('courses/show', {
                course: course
            });
        });
});

// delete course
router.delete('/:id', function(req, res) {
    Course.findByIdAndRemove(req.params.id)
        .exec(function(err, course) {
            if (err) { console.log(err); }

            console.log( 'Course deleted.');
            // redirect back to the index route
            res.redirect('/courses');
        });
});


module.exports = router;
