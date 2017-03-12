const time = require('./time');
const padRight = require('pad-right');
const chalk = require('chalk');

/**
 * Creates a new instance of a printer
 * @param  {Object} definition Definition of the printer to create.
 * @return {Object}            Public api of the created printer.
 */
function logger(definition = {}) {
  const { prefix = '', formatter = (text) => text, showTime = true } = definition;
  let formattedPrefix = prefix;

  function printTime(...message) {
    console.log(chalk.gray(time.current), formattedPrefix, ...message); // eslint-disable-line no-console
  }

  function printEmpty(...message) {
    console.log(time.empty, formattedPrefix, ...message); // eslint-disable-line no-console
  }

  function refresh(textWidth) {
    formattedPrefix = formatter(padRight(prefix, textWidth, ' '));
  }

  return {
    print: showTime ? printTime : printEmpty,
    prefix,
    refresh
  };
}

module.exports = logger;
