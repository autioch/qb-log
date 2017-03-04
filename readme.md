# qbLog
Yet another console logger. Extra simple basic usage.

## Install
`npm install qb-log`

## Usage
This module provides pure console logging for console applications and/or development.

```javascript
// import and use sysLog profile.
const qbLog = require('qb-log')('sysLog');

// 20:15:00 INFO      Normal operation.
qbLog.info('Normal operation.');

// 20:15:00 WARN      Error incoming.
qbLog.warn('Error incoming.');
```

## Profiles
qbLog contains 3 default profiles:
- `basic` enabled by default, contains only `empty` printer,
- `sysLog` follows https://en.wikipedia.org/wiki/Syslog#Severity_level ,
- `simple` has 4 basic methods: `error`, `warn`, `info` and `debug`.

To use a profile, use the qbLog as a function, passing the profile name string as the only parameter.
Methods from this profile will be _available globally_. Using a profile does not remove previous profiles, but merely add its printers to the list.

```javascript
// require qbLog
const qbLog = require('qb-log');

// add methods from the sysLog profile.
qbLog('sysLog');
```

## Custom printers
Custom printers can be defined by adding them to the qbLog. They will be _available globally_.

```javascript
const qbLog = require('qb-log');

qbLog._add('example', {
  prefix: 'MY_PREFIX',
  formatter: qbLog._chalk.gray,
  showTime: false
});

//          MY_PREFIX This will be example message
qbLog.example('This will be example message');
```
Definition of a printer consists of 3 properties. Each of them is optional.

### prefix
String, kind of namespace, that will be printed before the actual message.

### showTime
Boolean, specifies if the current time should be printed at the beginning of the line.

### formatter
This function will be passed the `prefix` string, which can be modified. However the length of the string should not be modified, as this would break the indentation of the messages. qbLog itself uses the `chalk` module, that colorizes font or background of the formatter.

## Custom Profiles
If neither `sysLog` nor `simple` suits You, instead of passing profile name, a dictionary of printer definitions can be passed.
```javascript
const qbLog = require('qb-log');

qbLog({
  info: {
    prefix: 'INFO',
    formatter: chalk.cyan,
    showTime: true
  },
  debug: {
    prefix: 'DEBUG',
    formatter: chalk.green,
    showTime: false
  }
});

qbLog.info('Some info');
qbLog.debug('Some debug');
```
Using a profile does not remove previous profiles, but merely add its printers to the list.

## Removing loggers
If You want to use sysLog profile, but You don't want to use `emergency` or You want to redefine it, you may simply remove it, and add new definition that will suit You.
```javascript
const qbLog = require('qb-log');

qbLog('sysLog')._remove('emergency');
```
