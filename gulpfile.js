
'use strict';

var gulp     = require('gulp');
var path     = require('path');
// var sass     = require('gulp-ruby-sass');
// var imagemin = require('gulp-imagemin');
// var pngquant = require('imagemin-pngquant');
// var gutil    = require('gulp-util');
// var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
// var includefile = require('gulp-file-include');
// var sourcemaps = require('gulp-sourcemaps');
// var replace = require('gulp-replace');


// projects directories and pathes
var dir = {
    sass: './css/_scss',
    css: './css',
    img: './images'
}, paths = {
    sass: dir.sass + '/**/*.scss',
    img: dir.img + '/**/*.*',
    css: dir.css + '/*.css'
}, output = {
    root: './',
    templates: './templates',
    img: './images'
};

function onError (err){

    gutil.beep()
    console.log( err );
}

/* ============
 * Task: compile .scss file
 * ============
 **/
// gulp.task( 'sass', function () {

//     return sass(paths.sass, {
//             style: ['compressed'],
//             emitCompileError:true
//          })
//         .on('error', onError)
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions', 'Android >= 4.0'],
//             cascade: false
//          }))
//         .pipe(sourcemaps.write('maps'))
//         .pipe(gulp.dest(dir.css));
// });

//  ============
//  * Task: watch .scss file
//  * ============
//  *
// gulp.task( 'watch:sass', function () {

//     return gulp.watch( paths.sass, ['sass'] );
// });

// gulp.task( 'build:img', function(){

//     return gulp.src( paths.img )
//        .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         }))
//        .pipe(gulp.dest(output.img));
// });

gulp.task( 'server', function(){

    browserSync({
        server: true,
        startPath: 'index.html',
        notify: false
    }, function(err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });

    var reload = browserSync.reload;
    // gulp.watch(["./**/*.js", "./**/*.html", "./css/*.css"]).on('change', reload);
})

// var connect = require('gulp-connect');
//
// gulp.task('server', function() {
// connect.server({
//   root: 'index.html',
//   port: 6666,
//   livereload: true
// });
// });

gulp.task( 'build', [ 'build:img', 'build:js' ])

gulp.task( 'default', [ 'server']);
