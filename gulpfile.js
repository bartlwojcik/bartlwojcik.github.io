'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

// configuration
var paths = {
  allScripts: [
    'gulpfile.js',
    'js/modules/*.js',
  ]
};

// lint all js code
gulp.task('lint', function() {
  return gulp.src(paths.allScripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// build main.bundle.js
gulp.task('browserify', function() {
  return browserify('./js/main.js')
    .bundle()
    .pipe(source('main.bundle.js'))
    .pipe(gulp.dest('./js/'))
    .pipe(livereload());
});

// build styles.css from sass
gulp.task('styles', function() {
  gulp.src('sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(livereload());
});

// watch files
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('js/**/*.js', ['browserify']);
  gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('default', ['browserify','styles','watch']);
