var gulp = require('gulp'),
    uglyfly = require('gulp-uglyfly'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon'),
    compass = require('gulp-compass'),
    sourcemaps = require('gulp-sourcemaps'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    plumber = require('gulp-plumber'),
    jade = require('gulp-jade'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin'),
    prefix = require('gulp-autoprefixer'),
    notify = require("gulp-notify"),
    clean = require('gulp-clean'),
    minifyCss = require('gulp-minify-css'),
    gulpFilter = require('gulp-filter'),
    mainBowerFiles = require('main-bower-files');

var js_dest_path = 'build/assets/lib/js';
var css_dest_path = 'build/assets/lib/css';
var img_for_fancybox = 'assets/lib/css';
var themes_for_semantic_ui = 'bower_components/semantic-ui/dist/themes/**/*';
var materialize_sass_path = 'bower_components/materialize/sass/**/*';
var materialize_font_path = 'bower_components/materialize/font/**/*';

var jsFilter = gulpFilter('*.js');
var cssFilter = gulpFilter('*.css');
var imgFilter = gulpFilter(['*.gif', '*.png']);



//test task
gulp.task('test', function(){
  console.log("this is a test sentence.");
});

// export bower files to where we want
gulp.task('exportBowerFiles', function() {
    return gulp.src(mainBowerFiles())

    .pipe(jsFilter)
        .pipe(gulp.dest(js_dest_path))
        .pipe(jsFilter.restore())
        
    .pipe(cssFilter)
        .pipe(gulp.dest(css_dest_path))
        .pipe(cssFilter.restore());
});


// export semantic-ui themes to where we want
gulp.task('semanticUiThemes', function() {
  return gulp.src(themes_for_semantic_ui, { base: 'bower_components/semantic-ui/dist' })
        .pipe(gulp.dest('build/assets/lib/css'));

});

// export materialize sass files to where we want
gulp.task('materializeSass', function() {
  return gulp.src(materialize_sass_path, { base: 'bower_components' })
        .pipe(gulp.dest('build/assets/lib'));

});

gulp.task('materializFont', function() {
  return gulp.src(materialize_font_path, { base: 'bower_components/materialize' })
        .pipe(gulp.dest('build/assets/lib/css'));

});


// Sctipt Task
// Uglifies
gulp.task('scripts', function(){
  gulp.src('native/js/*.js')
    .pipe(plumber())
    .pipe(uglyfly())
    .pipe(gulp.dest('build/js'))
    .pipe(notify("Scripts uglify are done!"));
});

//compass Task
//compile
// gulp.task('compass', function() {
//   gulp.src('native/sass/**/*.sass')
//     .pipe(plumber())
//     .pipe(compass({
//       css: 'build/css',
//       sass: 'native/sass',
//       sourcemaps: true
//     }))
//     .pipe(prefix())
//     .pipe(gulp.dest('build/css'))
//     .pipe(notify("Compass complie complete!"));
// });

//Sass Task
//compile
gulp.task('sass', function () {
    gulp.src('native/sass/**/*.sass')
        .pipe(plumber())
        .pipe(sass({
          indentedSyntax: true
        }))
        .pipe(prefix())
        .pipe(gulp.dest('build/css'))
        .pipe(notify("Sass complie complete!"));
});

//mateiralize compile task
//compile 
gulp.task('materializeSassCompile', function () {
    gulp.src('build/assets/lib/materialize/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/assets/lib/css'))
        .pipe(notify("materializeSass complie complete!"));
});

//Styles Task
//compile 
gulp.task('styles', function () {
  gulp.src('native/stylus/**/*.styl')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({use: nib()}))
    .pipe(prefix())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(notify("Styles complie complete!"));
});

//Template task
//compile jade
gulp.task('templates', function () {
  gulp.src('native/jade/index.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('build'))
    .pipe(notify("Template complie complete!"));
});

//Images task
//compress
gulp.task('image', function () {
  gulp.src('native/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
    .pipe(notify("Images compress complete!"));
});

//Watch Task
//Watches JS
gulp.task('watch', function(){
  gulp.watch('native/js/*.js', ['scripts']);
  gulp.watch('native/stylus/**/*.styl', ['styles']);
  gulp.watch('native/**/*.jade', ['templates']);
  // gulp.watch('native/sass/**/*.sass', ['sass']);
});


gulp.task('default', ['scripts', 'styles','templates', 'watch']);