var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  cache = require('gulp-cache'),
  cleancss = require('gulp-clean-css'),
  imagemin = require('gulp-imagemin'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass')

gulp.task('styles', function () {
  return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 3 versions'))
    .pipe(notify({
      message: '- Styles task complete -'
    }))
    .pipe(gulp.dest('css/'))
  //    .pipe(rename({
  //      suffix: '.min'
  //    }))
  //    .pipe(cleancss())
})

gulp.task('imagemin', function () {
  return gulp.src('img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'))
})

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series('styles'));
})
