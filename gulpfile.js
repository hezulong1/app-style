const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')) // dart-sass
const less = require('gulp-less')
const header = require('gulp-header')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const { version, author, name, license } = require('./package.json')
const argv = require('minimist')(process.argv.slice(2), { string: [ '_' ] })

const banner = `/*!
 * ${name} v${version}
 * (c) 2018-${new Date().getFullYear()} ${author}
 * ${license} License
 */
`
const resources = (argv.modern ? 'flex' : 'reset,reboot,reboot-zh,float').split(',')
const browsers = argv.modern ? ['defaults'] : ['> 1%', 'last 3 versions']

const globalPipe = stream => stream
  .pipe(autoprefixer({
    browsers,
    cascade: false,
    remove: true
  }))
  .pipe(cleanCss(argv.modern ? {} : { compatibility: 'ie9' }))
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
