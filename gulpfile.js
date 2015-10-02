/**
 * Created by AnyGong on 2015/9/6.
 */
var gulp = require('gulp');
//var sassdoc = require('sassdoc');
var sassdocSetting=require('./package.json').sassdoc;
var sass = require('gulp-ruby-sass');
//gulp.task('sassdoc', function () {
//    return gulp.src(sassdocSetting.source)
//        .pipe(sassdoc(sassdocSetting));
//});

gulp.task('sass', function () {
    return sass('sass/style.scss', {noCache: true,style:'expand'})
        .on('error', sass.logError)
        .pipe(gulp.dest('test/'))
});
gulp.task('watch', function () {
    gulp.watch(pkg.source, ['sassdoc']);
});


