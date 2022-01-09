const PORT = process.env.PORT || 3000;
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
const http = require("http");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const route1Router = require("./routes/route1Router");
const route2Router = require("./routes/route2Router");

app.use("/api/ping", route1Router);
app.use("/api/posts", route2Router);


// Request:
// Route: /api/ping
// Method: GET
// Response:
// Response body (JSON):
// {
// "success": true
// }
// Response status code: 200

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))

module.exports = app;
