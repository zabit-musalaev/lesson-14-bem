const gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

gulp.task('hello', function(done) {
  console.log('Привет, мир!');
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('cssmin', function (done) {
  gulp.src('css/*.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist'));
      done();
});