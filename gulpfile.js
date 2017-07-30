var gulp = require('gulp'),
fontgen = require('gulp-fontgen'),
del = require('del'),
runSequence = require('run-sequence');

// moves dist to gh-pages

gulp.task('fontgen1', function(callback){
  del('./fonts', callback);
});

gulp.task('fontgen2', function() {
  return gulp.src('./fontgen/*.{ttf,otf}')
  .pipe(fontgen({
    dest: './fonts/'
  }));
});

gulp.task('default', function(callback) {
  runSequence(
    ['fontgen1'],
    ['fontgen2'],
    callback
    );
});
