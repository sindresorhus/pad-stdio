'use strict';
var lpad = require('lpad');

exports.stdout = function (pad) {
	var _write = process.stdout.write.bind(process.stdout);
	process.stdout.write = pad ? function (str) { _write(lpad(str, pad)) } : _write;
};

exports.stderr = function (pad) {
	var _write = process.stderr.write.bind(process.stderr);
	process.stderr.write = pad ? function (str) { _write(lpad(str, pad)) } : _write;
};
