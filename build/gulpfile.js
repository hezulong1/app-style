const gulp = require('gulp');

const gulpif = require('gulp-if');
const header = require('gulp-header');
const rename = require('gulp-rename');
// css
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const sass = require('gulp-sass');
// helper
const config = require('./root');
const dir = require('./utils').dir;

function showError(error) {
  console.error(error.toString());
  this.emit('end');
}

/* tasks:css */
const Css = {
  src: ['../src/scss/app.scss'],
  dest: '../css'
};

const needMore = false
const More = [
  '../src/scss/app-reset.scss',
  '../src/scss/app-reboot.scss'
]

gulp.task('css_compile', function() {
  needMore && Css.src.push(...More)

  return gulp.src(Css.src)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // 嵌套输出方式 nested, 展开输出方式 expanded, 紧凑输出方式 compact, 压缩输出方式 compressed
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 3 versions'],
      cascade: false,
      remove: true
    }))
    .pipe(gulpif(config.env === '"production"', cleanCss({compatibility: 'ie9'})))
    .pipe(gulpif(config.env === '"production"', rename({suffix: '.min'})))
    .pipe(header(config.banner))
    .pipe(gulp.dest(Css.dest));
});

gulp.task('css_watch', function() {
  gulp.watch(dir(Css.src) + '/**', ['css_compile']);
});