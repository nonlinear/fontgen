var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
del = require('del'),
runSequence = require('run-sequence'),
config = require('../config');

// moves dist to gh-pages

gulp.task('fontgen1', function(callback){
  del('./fonts', callback);
});

gulp.task('fontgen2', function() {
  return gulp.src('./fontgen/*.{ttf,otf}')
  .pipe($.fontgen({
    dest: './fonts/'
  }));
});

gulp.task('fontgen', function(callback) {
  runSequence(
    ['fontgen1'],
    ['fontgen2'],
    callback
    );
});
