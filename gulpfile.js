const gulp = require('gulp');
const gfi = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

gulp.task('styles', function () {
    return gulp.src('./pages/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build'));
});

gulp.task('build', function () {
    return gulp.src(['./pages/*.html'])
        .pipe(gfi())
        .pipe(gulp.dest('./build'));
});

gulp.task('clean', () => {
    return del([
        './build',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles', 'build']));