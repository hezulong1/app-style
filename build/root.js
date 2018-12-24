/*!
 root.js
 */

const version = require('../package.json').version;
const author = require('../package.json').author;
const capitalize = require('./utils').capitalize;
const env = JSON.stringify(process.env.NODE_ENV);

console.log('当前环境：%o', env);

const banner =
  '/*!\n' +
  ' * App ' + capitalize(env.replace(/\"/g, '')) + ' v' + version + '\n' +
  ' * (c) 2018-' + new Date().getFullYear() + ' ' + author + ' \n' +
  (env === '"development"' ? ' * build in: ' + new Date().toLocaleString() + '\n' : '') +
  ' */\n' +
  '\n';

module.exports = {
  banner,
  version,
  env
};