import leftPad from 'lpad';

const _outWrite = process.stdout.write.bind(process.stdout);
const _errorWrite = process.stderr.write.bind(process.stderr);

export function padStdout(padString) {
	process.stdout.write = padString ? (string => {
		_outWrite(leftPad(string, padString));
	}) : _outWrite;
}

export function padStderr(padString) {
	process.stderr.write = padString ? (string => {
		_errorWrite(leftPad(string, padString));
	}) : _errorWrite;
}
