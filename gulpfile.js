//JS
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');


//JS
gulp.task('sass', function(){
  return gulp.src('assets/scss/style.scss')
    .pipe(sass())    // ici on utilise gulp-sass
    .pipe(gulp.dest('assets/css'))
});