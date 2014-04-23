var gulp = require('gulp'),
    util = require('gulp-util'),
    less = require('gulp-less'),
    recess = require('gulp-recess');

gulp.task('default', function() {
  return gulp.src('./test/test.less')

    // Recess doesn't like LESS 1.7.0
    // .pipe(recess({
    //   includePath: ['./'],
    //   strictPropertyOrder: false
    // }).on('error', function(err) {
    //   util.log(err);
    // }))

    .pipe(less({
      paths: ['./']
    }).on('error', function(err) {
      util.log(err);
    }))

    .pipe(gulp.dest('test'));
});
