# qbLog
Yet another console logger. Extra simple basic usage.

## Install
`npm install qb-log`

## Usage
This module provides pure console logging for console applications and/or development.

```javascript
// import and use sysLog preset.
const qbLog = require('qb-log')('sysLog');

// 20:15:00 INFO      Normal operation.
qbLog.info('Normal operation.');

// 20:15:00 WARN      Error incoming.
qbLog.warn('Error incoming.');
```

## Presets
qbLog contains 3 default presets:
- `basic` enabled by default, contains only `empty` printer,
- `sysLog` follows https://en.wikipedia.org/wiki/Syslog#Severity_level ,
- `simple` has 4 basic methods: `error`, `warn`, `info` and `debug`.

To use a preset, use the qbLog as a function, passing the preset name string as the only parameter.
Methods from this preset will be _available globally_. Using a preset does not remove previous presets, but merely add its printers to the list.

```javascript
// require qbLog
const qbLog = require('qb-log');

// add methods from the sysLog preset.
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
- `prefix=''` - string, kind of namespace, that will be printed before the actual message
- `showTime=true`- boolean, specifies if the current time should be printed at the beginning of the line
- `formatter=(text)=>text`- this function will be passed the `prefix` string, which can be modified. However the length of the string should not be modified, as this would break the indentation of the messages. qbLog itself uses the `chalk` module, that colorizes font or background of the formatter.

## Custom presets
If neither `sysLog` nor `simple` suits You, instead of passing preset name, a dictionary of printer definitions can be passed.

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
Using a preset does not remove previous presets, but merely add its printers to the list.

## Removing loggers
If You want to use sysLog preset, but You don't want to use `emergency` or You want to redefine it, you may simply remove it, and add new definition that will suit You.
```javascript
const qbLog = require('qb-log');

qbLog('sysLog')._remove('emergency');
```