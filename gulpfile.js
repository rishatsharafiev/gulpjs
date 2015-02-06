/* dependencies */
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber');

/* options, paths */
var options = {
    prefix_options: ["last 7 version", "> 1%", "ie 8", "ie 7"],

    css_src: ['src/css/**/*.css', 'src/css/*.css'],
    css_dest: 'dest/css/',
    css_file: 'main.css',

    js_src: ['src/js/**/*.js', 'src/js/*.js'],
    js_dest: 'dest/js/',
    js_file: 'main.js'
};

/* utils */

/* styles */
gulp.task('process-css', function() {
    return gulp.src(options.css_src)
        .pipe(plumber())
        .pipe(concat(options.css_file))
        .pipe(autoprefixer.apply(null, options.prefix_options))
        .pipe(gulp.dest(options.css_dest))
        .pipe(rename({suffix: '.min'} ))
        .pipe(minifycss())
        .pipe(gulp.dest(options.css_dest));
});

/* scripts */
gulp.task('jshint', function() {
    return gulp.src(options.js_src)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

gulp.task('process-js', function() {
    return gulp.src(options.js_src)
        .pipe(plumber())
        .pipe(concat(options.js_file))
        .pipe(gulp.dest(options.js_dest))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(options.js_dest));
});

gulp.task('watch', function() {
    gulp.watch(options.css_src, function() {
        gulp.start('process-css');
    });

    gulp.watch(options.js_src, function() {
        gulp.start('process-js');
    });
});

gulp.task('default', ['process-css', 'process-js']);
