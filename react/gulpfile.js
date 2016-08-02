var gulp = require('gulp'),
    less = require('gulp-less'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify'),
    runSequence = require('run-sequence');

gulp.task('compile-less',function(){
  gulp.src('./public/stylesheets/styles.less')
  .pipe(less())
  .pipe(gulp.dest('./public/dist/css/'));
});

gulp.task('build',function(){
  return browserify({
    entries: 'public/javascripts/main.js',
    extensions: ['.jsx'],
    debug: true
  })
    .transform(babelify,{
      "presets": ["stage-1","stage-2","es2015","react"],
      "plugins": ["transform-decorators-legacy","transform-class-properties"]
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('public/dist/js'));
});

// gulp.task('watch-css',function(){
//   gulp.watch('public/stylesheets/*.*',['compile-less']);
// });

// gulp.task('watch',function(){
//   gulp.watch('public/javascripts/*/*.*',['default']);
// });

gulp.task('default',function(cb){
  runSequence('compile-less','build',cb);
})
