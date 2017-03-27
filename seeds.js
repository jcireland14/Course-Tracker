var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/golf_db');

var Course = require("./models/course");

mongoose.promise = global.Promise;

Course.remove({}, function(err) {
    console.log(err);
});

var Flourtown = new Course({
    course_name: req.body.course_name,
        city: req.body.city,
        state: req.body.state,
        par: req.body.par,
        date_played: req.body.date_played
});

var Ace = new Course({
    course_name: req.body.course_name,
        city: req.body.city,
        state: req.body.state,
        par: req.body.par,
        date_played: req.body.date_played
});

var Sandy_Run = new Course({
    course_name: req.body.course_name,
        city: req.body.city,
        state: req.body.state,
        par: req.body.par,
        date_played: req.body.date_played
});

var Pinehurst = new Course({
    course_name: req.body.course_name,
        city: req.body.city,
        state: req.body.state,
        par: req.body.par,
        date_played: req.body.date_played
});


Flourtown.save(function(err) {
  if (err) console.log(err);

  console.log('de Saint-Exupery created!');
});

Ace.save(function(err) {
  if (err) console.log(err);

  console.log('Fforde created!');
});

Sandy_Run.save(function(err) {
  if (err) console.log(err);

  console.log('Willig created!');
});

Pinehurst.save(function(err) {
  if (err) console.log(err);

  console.log('Lutz created!');
});
