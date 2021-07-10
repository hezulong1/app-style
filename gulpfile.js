const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')) // dart-sass
const less = require('gulp-less')
const header = require('gulp-header')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const { version, author, name, license } = require('./package.json')

const banner = `/*!
 * ${name} v${version}
 * (c) 2018-${new Date().getFullYear()} ${author}
 * ${license} License
 */
`
const resources = 'reset,reboot,reboot-zh'.split(',')

const globalPipe = stream => stream
  .pipe(autoprefixer({
    browsers: ['> 1%', 'last 3 versions'],
    cascade: false,
    remove: true
  }))
  .pipe(cleanCss({compatibility: 'ie9'}))
  .pipe(header(banner))
  .pipe(gulp.dest('./css'))

exports.scss = function() {
  return globalPipe(
    gulp
    .src(resources.map(file => `./src/scss/${file}.scss`))
    .pipe(sass().on('error', sass.logError))
  )
}

exports.less = function() {
  return globalPipe(
    gulp
    .src(resources.map(file => `./src/less/${file}.less`))
    .pipe(less())
  )
}
