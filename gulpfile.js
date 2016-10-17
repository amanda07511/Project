//JS
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Requires the gulp-css-scss plugin
var cssScss = require('gulp-css-scss');


//JS
gulp.task('sass', function(){
  return gulp.src('assets/scss/style.scss')
    .pipe(sass())    // ici on utilise gulp-sass
    .pipe(gulp.dest('assets/css'))
});

gulp.task('css-scss', function(){
  return gulp.src('assets/css/style.css')
    .pipe(cssScss())
    .pipe(gulp.dest('assets/scss'));
});