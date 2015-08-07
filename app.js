var express = require('express');
var app = express();

//app.use(require('connect-livereload')());
app.use(express.static('www'));

//module.exports = app;
app.listen(3000);