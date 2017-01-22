const chalk = require('chalk');

// https://en.wikipedia.org/wiki/Syslog#Severity_level

module.exports = {
  emergency: {
    prefix: 'EMERGENCY',
    formatter: chalk.bgRed,
    showTime: true
  },
  alert: {
    prefix: 'ALERT',
    formatter: chalk.bgBlue,
    showTime: true
  },
  critical: {
    prefix: 'CRITICAL',
    formatter: chalk.bgMagenta,
    showTime: true
  },
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
  notice: {
    prefix: 'NOTICE',
    formatter: chalk.green,
    showTime: true
  },
  info: {
    prefix: 'INFO',
    formatter: chalk.cyan,
    showTime: true
  },
  debug: {
    prefix: 'DEBUG',
    formatter: chalk.blue,
    showTime: true
  }
};
