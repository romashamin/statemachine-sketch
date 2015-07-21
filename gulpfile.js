var gulp = require('gulp');
var concat = require('gulp-concat');

var srcFiles = [
  './src/header.coscript',
  './src/msstyle-helpers.coscript',
  './src/mslayer-helpers.coscript',
  './src/app.coscript'
];

gulp.task('concat', function() {
  return gulp.src(srcFiles)
    .pipe(concat('State-Machine.coscript'))
    .pipe(gulp.dest('./State-Machine.sketchplugin/Contents/Sketch/'));
});

gulp.task('copy', function() {
  return gulp.src(['./State-Machine.sketchplugin/**/*'], { base: './' })
    .pipe(gulp.dest('/Users/roma/Library/Containers/com.bohemiancoding.sketch3/Data/Library/Application Support/com.bohemiancoding.sketch3/Plugins/'));
});

gulp.task('build', ['concat', 'copy']);

gulp.task('default', function() {
  gulp.start(['build']);
});
