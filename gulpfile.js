/// <reference path="typings/node/node.d.ts"/>
var gulp = require('gulp');
var app = require('./app');

var lr = require('tiny-lr')();

function startLivereload() {
  lr.listen(35729);
}

// Notifies livereload of changes detected
// by `gulp.watch()` 
function notifyLivereload(event) {
  lr.changed({
    body: {
      files: [require('path').relative(__dirname, event.path)]
    }
  });
}

gulp.task('default',function(){
	app.listen(process.env.port || 3000);
	startLivereload();
	gulp.watch('**/*.*', notifyLivereload);
})
//