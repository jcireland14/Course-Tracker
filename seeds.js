var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/golf_db');
var Course = require("./models/course");

mongoose.promise = global.Promise;

Course.remove({}, function(err) {
    console.log(err);
});

var Flourtown = new Course({
    course_name: 'Flourtown CC',
        city: 'Flourtown',
        state: 'PA',
        par: '36',
        date_played: '6/10/16'
});

var Ace = new Course({
    course_name: 'Ace CC',
        city: 'Lafayette Hill',
        state: 'PA',
        par: '72',
        date_played: '6/14/16'
});

var Sandy_Run = new Course({
    course_name: 'Sandy Run CC',
        city: 'Oreland',
        state: 'PA',
        par: '72',
        date_played: '5/19/2016'
});

var PineCrest = new Course({
    course_name: 'PineCrest',
        city: 'Lansdale',
        state: 'PA',
        par: '72',
        date_played: '4/11/16'
});


Flourtown.save(function(err) {
  if (err) console.log(err);

  console.log('Flourtown CC created!');
});

Ace.save(function(err) {
  if (err) console.log(err);

  console.log('Ace CC created!');
});

Sandy_Run.save(function(err) {
  if (err) console.log(err);

  console.log('Sandy Run CC created!');
});

PineCrest.save(function(err) {
  if (err) console.log(err);

  console.log('PineCrest CC created!');
});
