'use strict';
var padStdio = require('./index');

padStdio.stdout('  ');
padStdio.stderr('  ');
console.log('foo');
console.error('foo');
