var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var CourseSchema = new Schema({
    course_name: String,
    city: String,
    state: String,
    par: String,
    date_played: Date
});

CourseSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

var UserSchema = new Schema({
  email: String,
  password_digest: String,
  created_at: Date,
  updated_at: Date,
  course:[CourseSchema]

});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});







var UserModel = mongoose.model('User', UserSchema);
var CourseModel = mongoose.model('Course', CourseSchema);

module.exports = {
  User: UserModel,
  Course: CourseModel
}
