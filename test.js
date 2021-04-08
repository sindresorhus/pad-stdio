import {promisify} from 'util';
import {execFile} from 'child_process';
import test from 'ava';

const execFileP = promisify(execFile);

test('main', async t => {
	const {stdout, stderr} = await execFileP(process.execPath, ['fixture.js']);
	t.is(stdout.trimEnd(), '  foo');
	t.is(stderr.trimEnd(), '  foo');
});
