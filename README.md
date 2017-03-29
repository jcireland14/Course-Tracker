# FORE-tracker-app

## Application Name: Fore! Tracker

Golf course and score tracker application

[Heroku Link] (#)

[App Wireframe](#)

[Portfolio Site] (#)
## App Overview

Fore! Tracker is an application intended to keep track of golf courses that a user has played and also some information about their round at the course.

The intention of this app is to keep track of the course a user has played so that they no longer need to keep score cards to see what they scored at a specific course helping with generating a handicap for them later.

## Unsolved/future features:
* Just cleaner CSS


## Stretch Goals
* Administrator log-in
* Add/upload image to user course page


## Entity Relationship Diagrams (Database Modeling)

User = {
  username: String,
  password: String,
  created_at: Date,
  updated_at: Date,
  course:[CourseSchema]
}

Course = {
    courseName: String,
    city: String,
    state: String,
    par: String,
    myScore: String,
    ball: String,
    comments: String,
    datePlayed: Date
}


## Technologies Used

  * Languages - HTML5, CSS3, Javascript, Express, Handlebars, Mongoose, Bcrypt, Cookie-Parser, Method-override, jQuery, bootstrap
  * Design -  Google Fonts
  * Project Planning & User Stories - [Trello](https://trello.com/b/DjHs2r0x/wdi-project-two)
  * Sublime Text 3









