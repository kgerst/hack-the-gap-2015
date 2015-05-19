var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var lib    = require('bower-files')();
 
gulp.task('default', function () {
  gulp.src(lib.ext('js').files)
    .pipe(concat('lib.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});