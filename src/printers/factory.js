const chalk = require('chalk');

const width = '24:59:59'.length;
const empty = ' '.repeat(width);
const current = () => new Date().toTimeString().substr(0, width);
const noFormatter = (text) => text;

/**
 * Creates a new instance of a printer
 * @param  {Object} definition Definition of the printer to create.
 * @return {Object}            Public api of the created printer.
 */
module.exports = function logger(definition = {}) {
  const { prefix = '', formatter = noFormatter, showTime = true } = definition;
  let formattedPrefix = prefix;

  function printTime(...message) {
    console.log(chalk.gray(current()), formattedPrefix, ...message);
  }

  function printEmpty(...message) {
    console.log(empty, formattedPrefix, ...message);
  }

  function refresh(textWidth) {
    formattedPrefix = formatter(prefix.padEnd(textWidth, ' '));
  }

  return {
    print: showTime ? printTime : printEmpty,
    prefix,
    refresh
  };
};

