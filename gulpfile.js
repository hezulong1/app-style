const gulp = require('gulp');
const sass = require('gulp-sass');
const header = require('gulp-header');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const { version, author, name, license } = require('./package.json');

const banner = `/*!
 * ${name} v${version}
 * (c) 2018-${new Date().getFullYear()} ${author}
 * ${license} License
 */
`;
const resources = 'reset,reboot,share,print,animation,app'
  .split(',')
  .map(file => `./src/${file}.scss`);

sass.compiler = require('sass'); // dart-sass
gulp.task('build', function() {
  return gulp.src(resources)
    // 嵌套输出方式 nested, 展开输出方式 expanded, 紧凑输出方式 compact, 压缩输出方式 compressed
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 3 versions'],
      cascade: false,
      remove: true
    }))
    .pipe(cleanCss({compatibility: 'ie9'}))
    .pipe(header(banner))
    .pipe(gulp.dest('./css'));
});
