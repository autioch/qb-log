const width = require('./width');

/**
 * Returns current time as a formatted string.
 * @return {String} Time string in a format HH:MM:SS
 */
module.exports = function current() {
  return new Date().toTimeString().substr(0, width);
};
