const chalk = require('chalk');

module.exports = {
  error: {
    prefix: 'ERROR',
    formatter: chalk.red,
    showTime: true
  },
  warn: {
    prefix: 'WARN',
    formatter: chalk.yellow,
    showTime: true
  },
  info: {
    prefix: 'INFO',
    formatter: chalk.cyan,
    showTime: true
  },
  debug: {
    prefix: 'DEBUG',
    formatter: chalk.green,
    showTime: true
  }
};
