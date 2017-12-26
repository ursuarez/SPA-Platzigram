const 
    gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    rename     = require('gulp-rename'),
    cleanCSS   = require('gulp-clean-css'),
    babel      = require('babelify'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream')

gulp.task('styles', () => {
    gulp    
        .src('index.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'))
})

gulp.task('assets', () => {
    gulp
        .src('assets/*')
        .pipe(gulp.dest('public'))
})

gulp.task('scripts', () => {
    browserify('./src/index.js')
        .transform(babel)
        .bundle()
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public'))
})

gulp.task('default', () => {
    gulp.watch(['index.scss', './src/*.js', './assets/*.*'], ['styles', 'scripts', 'assets'])
})