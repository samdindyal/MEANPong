var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss')

var config = {
  bootstrapDir: './bower_components/bootstrap-sass'
};

gulp.task('styles', function() {
  gulp.src('styles/**/*.scss')
    .pipe(sass({
       includePaths: [config.bootstrapDir + '/assets/stylesheets'],
      })
      .on('error', sass.logError))
    .pipe(uglifycss({'uglyComments': true}))
    .pipe(gulp.dest('assets'));
});
