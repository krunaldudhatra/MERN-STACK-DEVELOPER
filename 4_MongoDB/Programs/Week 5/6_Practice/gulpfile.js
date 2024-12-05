import gulp from 'gulp';
import concat from 'gulp-concat';

// Gulp task to concatenate files
gulp.task('default', function () {
  return gulp
    .src('src/files/*') 
    .pipe(concat('all.js')) 
    .pipe(gulp.dest('dest/files')); 
});

// Default Gulp task
//gulp.task('default', gulp.series('concat-files'));
