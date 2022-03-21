const gulp = require('gulp');
const gfi = require('gulp-file-include');

gulp.task('build', function () {
    return gulp.src(['./pages/*.html'])
        .pipe(gfi())
        .pipe(gulp.dest('./build'));
});