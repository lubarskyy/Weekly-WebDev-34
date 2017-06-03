var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var imagemin = require('gulp-imagemin');


gulp.task("sass", function() {
    return gulp.src("sass/main.scss")
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['> 1%'], //największy zakres ['> 1%'] - więcej niż 99% procent przeglądarek
            cascade: false
        }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task("watch", function() {
    gulp.watch("sass/**/*.scss", ["sass"]);
});

gulp.task('default', function() {
	gulp.src('images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('optimized'))
  }
);
