'use strict';
var padStdio = require('./');

padStdio.stdout('  ');
padStdio.stderr('  ');
console.log('foo');
console.error('foo');
