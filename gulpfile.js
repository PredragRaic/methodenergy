// Require necessary elements
const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    lec = require('gulp-line-ending-corrector')
;

// SASS
// sass.compiler = require('node-sass');
gulp.task('sass', () => {
    return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))

        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.messageOriginal %>")
        }))
        .pipe(autoprefixer(['last 8 versions']))
        .pipe(lec({ verbose: true, eolc: 'CRLF', encoding: 'utf8' }))

        .pipe(gulp.dest('./css'));
});

// Minify puraged CSS
gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
        .pipe(cleancss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./css/minified'));
});

// Uglify JS
gulp.task('uglify-js', function() {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js/minified'));
});

// Watch
gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./css/*.css', gulp.series('minify-css'));
    gulp.watch(['./js/*.js'], gulp.series('uglify-js'));
});

// Default task
gulp.task('default', gulp.series(
    'sass', 'minify-css', 'uglify-js'
    )
);
