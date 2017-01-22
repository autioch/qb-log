const logger = require('../src')('sysLog');

logger._add('example', {
  prefix: 'Example',
  formatter: logger._chalk.gray,
  showTime: false
});

logger.emergency('System is unusable');
logger.example('This level should not be used by applications.\n');

logger.alert('Should be corrected immediately');
logger.example('Loss of the primary ISP connection.\n');

logger.critical('Critical conditions');
logger.example('A failure in the system\'s primary application.\n');

logger.error('Error conditions');
logger.example('An application has exceeded its file storage limit and attempts to write are failing.\n');

logger.warn('May indicate that an error will occur if action is not taken.');
logger.example('A non-root file system has only 2GB remaining.\n');

logger.notice('Events that are unusual, but not error conditions.\n');

logger.info('Normal operational messages that require no action.');
logger.example('An application has started, paused or ended successfully.\n');

logger.debug('Information useful to developers for debugging the application.\n');

/* Remove loggers */

['emergency', 'alert', 'critical', 'error', 'warn', 'notice', 'example', 'empty', 'debug'].forEach(logger._remove);

logger.info('Example removing loggers (notice reduced prefix space used).\n');
