const profiles = require('./profiles');
const printers = require('./printers');

/**
 * Static function with printing functions as properties.
 * @param  {Object|string} definition Optional definition of printers to add.
 * @return {Function}                 The same function that has been called.
 */
function qbLog(definition = {}) {
  const profile = typeof definition === 'string' ? profiles[definition] : definition;

  Object
    .keys(profile)
    .forEach((id) => qbLog._add(id, profile[id]));

  return qbLog;
}

/* Basic console log. */
qbLog.log = console.log.bind(console);

/* Exposed chalk package. */
qbLog._chalk = require('chalk');

/**
 * Method to add new printer. Exposes the printing method to the package.
 * @param {String} id         Name of the function that will be used to call the printer.
 * @param {Object} definition Config of the printer.
 * @return {mixed}            Created instance of the printer or false if the instance if already created.
 */
qbLog._add = function(id, definition) {
  const printer = printers.add(id, definition);

  console.log('id', id);
  if (printer) {
    qbLog[id] = printer.print;
  }

  return qbLog;
};

/**
 * Method to remove existing printer.
 * @param  {String} id Name of the printer.
 * @return {undefined}    Nothing
 */
qbLog._remove = function(id) {
  printers.remove(id);

  delete qbLog[id];

  return qbLog;
};

/* Exports the logger with basic profile. */
module.exports = qbLog(profiles.base);
