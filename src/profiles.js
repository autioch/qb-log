const chalk = require('chalk');

const base = {
  empty: {
    prefix: '',
    formatter: (text) => text,
    showTime: false
  }
};

const simple = {
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

// https://en.wikipedia.org/wiki/Syslog#Severity_level

const sysLog = {
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

module.exports = {
  base,
  simple,
  sysLog
};
