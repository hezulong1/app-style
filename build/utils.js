/*!
 utils.js
 */

module.exports = {
  capitalize: string => string.charAt(0).toUpperCase() + string.slice(1),
  dir: path => path.slice(0, path.lastIndexOf('/')),
  basename: name => name.slice(0, name.lastIndexOf('.'))
};