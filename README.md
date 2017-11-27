# [@fav/prop.list-own-keys][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Lists enumerable and unenumerable own property keys of an object.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/prop.list-own-keys
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/prop.list-own-keys/` directory manually.*


## Usage

For Node.js:

```js
var listOwnKeys = require('@fav/prop.list-own-keys');
listOwnKeys({ a: 1, b: true, c: 'C' }); // => ['a', 'b', 'c' ]

function Fn() { this.a = 1; }
Fn.prototype.b = true;
var fn = new Fn();
Object.defineProperty(fn, 'c', { value: 'C' });
listOwnKeys(fn); // => ['a', 'c']
```

For Web browsers:

```html
<script src="fav.prop.list-own-keys.min.js"></script>
<script>
var listOwnKeys = fav.prop.listOwnKeys;
listOwnKeys({ a: 1, b: true, c: 'C' }); // => ['a', 'b', 'c' ]
</script>
```


## API

### <u>listOwnKeys(obj) : Array</u>

List enumerable and unenumerable own property keys of the given object.

This function returns the same result of `Object.getOwnPropertyNames`, but this function returns an empty array when *obj* is nullish.

***NOTE:*** *The result of `Object.getOwnPropertyNames` for a function is different between before and after of Node.js (io.js) v3. On v3 and laters it doesn't contain the properties `arguments` and `caller`, which are non-standard, but on earlier it contains them.*

***NOTE:*** *The results of `Object.getOwnPropertyNames` for a function on Some browsers, Chrome, Safari, Vivaldi, IE, and Edge also contain `arguments` and `caller`.*

***NOTE:*** *The result of `Object.getOwnPropertyNames` for a function on IE is different from the results on other browsers. It contains `arguments` and `caller` properties, and does not contain `name` property.*

#### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *obj*     | object | The object to be listed its property keys. |

#### Return:

An array of property keys.

**Type:** Array


## Checked                                                                      
### Node.js (4〜8)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-prop.list-own-keys/
[npm-img]: https://img.shields.io/badge/npm-v0.0.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/prop.list-own-keys
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-prop.list-own-keys.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-prop.list-own-keys
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-prop.list-own-keys?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-prop-list-own-keys
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-prop.list-own-keys/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-prop.list-own-keys?branch=master
