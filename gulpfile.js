var gulp = require('gulp');
var sass = require('gulp-sass');
// Requiring autoprefixer
var autoprefixer = require('gulp-autoprefixer');
var uglifycss = require('gulp-uglifycss');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

// Gulp Sass Task 
/*
gulp.task('sass', function() {
  gulp.src('./scss/{,*!/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
})
*/

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})


gulp.task('sass', function() {
  return gulp.src('app/scss/{,*/}*.{scss,sass}', {style: 'expanded'}) // added return
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9'))
    .pipe(gulp.dest('app/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(uglifycss())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'))
    // Reloading the stream
    .pipe(browserSync.reload({
      stream: true
    }));
});


// Create Gulp Default Task
// ------------------------
// Having watch within the task ensures that 'sass' has already ran before watching
// 
// This setup is slightly different from the one on the blog post at
// http://www.zell-weekeat.com/gulp-libsass-with-susy/#comment-1910185635
/*gulp.task('default', ['sass'], function () {
  gulp.watch('./scss/{,*!/}*.{scss,sass}', ['sass'])
});*/




gulp.task('default', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/{,*/}*.{scss,sass}', ['sass']);
  gulp.watch('app/index.html', browserSync.reload);
});