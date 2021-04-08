# pad-stdio

> Pad stdout and stderr

Especially useful with CLI tools when you don't directly control the output.

![](https://f.cloud.github.com/assets/170270/2420088/0c74e148-ab6a-11e3-9c1e-3ea2b91d24f2.png)

## Install

```
$ npm install pad-stdio
```

## Usage

```js
import {padStdout} from 'pad-stdio';

padStdout('  ');      // Start padding
console.log('foo');
padStdout('    ');
console.log('bar');
padStdout();          // End padding
console.log('baz');

/*
  foo
    bar
baz
*/
```

## API

### padStdout(padString)

Pads each line of `process.stdout` with the given pad string until the method is called again with no arguments.

### padStderr(padString)

Pads each line of `process.stderr` with the given pad string until the method is called again with no arguments.
