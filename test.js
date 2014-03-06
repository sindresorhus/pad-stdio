'use strict';
var assert = require('assert');
var padStdio = require('./index');

it('should pad the output of stdout', function (cb) {
	var _write = process.stdout.write.bind(process.stdout);

	process.stdout.write = function (str) {
		if (/  foo/.test(str)) {
			assert(true);
			cb();
		}
	};

	padStdio.stdout('  ');
	console.log('foo');
	process.stdout.write = _write;
});

it('should pad the output of stderr', function (cb) {
	var _write = process.stderr.write.bind(process.stderr);

	process.stderr.write = function (str) {
		if (/  foo/.test(str)) {
			assert(true);
			cb();
		}
	};

	padStdio.stderr('  ');
	console.error('foo');
	process.stderr.write = _write;
});
