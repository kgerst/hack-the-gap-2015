var lib    = require('bower-files')();

var gulp   = require('gulp');
var plugins = require('gulp-load-plugins')();

plugins.concat = require('gulp-concat');
plugins.uglify = require('gulp-uglify');

gulp.task('default', function () {
  gulp.src(lib.ext('js').files)
    .pipe(plugins.concat('lib.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('public/js'));
});