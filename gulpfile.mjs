import gulp from "gulp";

gulp.task("default", function (done) {
    return [
        gulp.src('node_modules/@tryghost/sodo-search/**/*', { encoding: false }).pipe(gulp.dest('sodo-search/')),
        gulp.src('node_modules/@tryghost/portal/**/*', { encoding: false }).pipe(gulp.dest('portal/')),
        gulp.src('node_modules/@tryghost/comments-ui/**/*', { encoding: false }).pipe(gulp.dest('comments-ui/')),
        done(),
    ]
});