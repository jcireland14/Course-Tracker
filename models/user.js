var Schema = require('../db/schema');
var mongoose = require('mongoose');

var User = Schema.User;
module.exports = User;

// var Schema = require('../db/schema');
// var mongoose = require('mongoose');

// var User = Schema.User;
// module.exports = User;

// mongoose.promise = global.Promise;

// var CourseSchema = new Schema({
//     course_name: String,
//     city: String,
//     state: String,
//     par: String,
//     date_played: Date
// });


// CourseSchema.pre('save', function(next){
//     now = new Date();
//     this.updated_at = now;
//     if ( !this.created_at ) {
//         this.created_at = now;
//     }
//     next();
// });

// /////\\\\\\///\/\/\/\/\/\/\/\/\/\/\/Figure this out(fullname needs to be changed)
// CourseSchema.virtual('fullName').get(function () {
//     return this.first_name + ' ' + this.last_name;
// });


// module.exports = mongoose.model("Course", CourseSchema);
