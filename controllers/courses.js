var Schema = require('../db/schema');
var mongoose = require('mongoose');

var User = Schema.User;
module.exports = User;

mongoose.promise = global.Promise;

var CourseSchema = new Schema({
    course_name: String,
    city: String,
    state: String,
    par: String,
    date_played: Date
});


CourseSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

/////\\\\\\///\/\/\/\/\/\/\/\/\/\/\/Figure this out(fullname needs to be changed)
CourseSchema.virtual('fullName').get(function () {
    return this.first_name + ' ' + this.last_name;
});


module.exports = mongoose.model("Course", CourseSchema);


// var express = require('express');
// var router = express.Router();
// var Course = require('../models/course');

// // index courses
// router.get('/', function(req, res) {
//     // res.send('courses will be here');
//     Course.find({})
//         .exec(function(err, courses) {
//             if(err) console.log(err);
//             console.log(courses);
//             // res.send(courses);
//             res.render('courses/index', {
//                   courses: courses
//             });
//         });
// });
// // new course
// router.get('/new', function(req, res) {
//     res.render('courses/new');
// });
// // create course
// router.post('/', function(req, res) {
//     var course = new Course({
//         course_name: req.body.course_name,
//         city: req.body.city,
//         state: req.body.state,
//         par: req.body.par,
//         date_played: req.body.date_played
//     });
//     course.save(function(err, course){
//         if (err) { console.log(err); }
//         console.log(course);
//         // res.send(course);
//         res.render('courses/show', {
//             course: course
//         });
//     });
// });
// // show course
// router.get('/:id', function(req, res) {
//     Course.findById(req.params.id)
//         .exec(function(err, course) {
//             if(err) console.log(err);
//             console.log(course);
//             // res.send(course);
//             res.render('courses/show', {
//                 course: course
//             });
//         });
// });
// // edit course
// router.get('/:id/edit', function(req,res) {
//     Course.findById(req.params.id)
//     .exec(function(err, course) {
//         if (err) { console.log(err); }
//         res.render('courses/edit', {
//             course: course
//         });
//     });
// });
// // update course
// router.patch('/:id', function(req, res) {
//     Course.findByIdAndUpdate(req.params.id, {
//         course_name: req.body.course_name,
//         city: req.body.city,
//         state: req.body.state,
//         par: req.body.par,
//         date_played: req.body.date_played
//     }, {new: true})
//         .exec(function(err, course) {
//             if (err) { console.log(err); }
//             console.log(course);
//             // res.send(course);
//             res.render('courses/show', {
//                 course: course
//             });
//         });
// });

// // delete course
// router.delete('/:id', function(req, res) {
//     Course.findByIdAndRemove(req.params.id)
//         .exec(function(err, course) {
//             if (err) { console.log(err); }

//             console.log( 'Course deleted.');
//             // redirect back to the index route
//             res.redirect('/courses');
//         });
// });


// module.exports = router;
