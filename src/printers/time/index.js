/*
 * Exports object with 2 properties
 */
exports.empty = require('./empty');

Object.defineProperty(exports, 'current', {
  writeable: false,
  get: require('./current')
});
