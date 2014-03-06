'use strict';
var assert = require('assert');
var execFile = require('child_process').execFile;

it('should pad the output of stdout and stderr', function (cb) {
	execFile('node', ['fixture.js'], function (err, stdout, stderr) {
		assert.equal(stdout.trimRight(), '  foo');
		assert.equal(stderr.trimRight(), '  foo');
		cb();
	});
});
