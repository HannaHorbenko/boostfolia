'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
// imagemin = require('gulp-imagemin'),
// pngquant = require('imagemin-pngquant'),
// zopfli = require('imagemin-zopfli'),
// mozjpeg = require('imagemin-mozjpeg'),
// giflossy = require('imagemin-giflossy'),
// jpegtran = require('imagemin-jpegtran');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

// gulp.task('images', () => {
//     return gulp.src('src/img/**/*.*')
//         .pipe(imagemin([
//             pngquant({
//                 speed: 1,
//                 quality: [0.8, 1]
//             }),
//             zopfli({ more: true }),
//             giflossy({
//                 optimizationLevel: 3,
//                 optimize: 3,
//                 lossy: 2
//             }),
//             imagemin.svgo({
//                 plugins: [{
//                     removeViewBox: false
//                 }]
//             }),
//             jpegtran({
//                 progressive: true
//             }),
//             mozjpeg({
//                 quality: 70
//             })
//         ]))
//         .pipe(gulp.dest('dist/img'))
//         .pipe(browserSync.stream());
// });
// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", gulp.parallel('sass'));
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
}));


gulp.task('default', gulp.series('serve'));