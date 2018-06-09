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

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/prop.list-own-keys/` directory manually.*


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

This function returns the same result of `Object.getOwnPropertyNames` in strict mode except that this function returns an empty array when `obj` is nullish.

***NOTE:*** *The result of `Object.getOwnPropertyNames` for a function in strict mode is different between before and after Node.js (io.js) v3.
On v3 and later it doesn't contain the properties `arguments` and `callar`.
This function excludes `arguments` and `caller` properties even not in strict mode for same behaviors on all versions of Node.js.*

***NOTE:*** *On some browsers, Chrome, Safari, Vivaldi, Edge and IE, the result of `Object.getOwnPropertyNames` for a function in non-strict mode is different from in strict mode.
It contains the properties `arguments` and `caller`. 
This function excludes `arguments` and `caller` properties even not in strict mode for same behaviors on other platforms.*

***NOTE:*** *The results of `Object.getOwnPropertyNames` for a function on IE and a no name function on Edge are different from results on other browsers and Node.js.
Those do not contain `name` property.
This function appends `name` property to the result on IE or Edge for same behaviors on target browsers and Node.js*

***NOTE:*** *The value of `name` property of a no-name function is the first assigned variable's name on Node.js v6 or later, and that value is an empty string on the eariler.
This function does no treatment about this differeneces.*

***NOTE:*** *On some browsers, Chrome, Firefox, Safari, and Vivaldi, the `name` property of a no-name function is the first assigned variable's name. On Edge, that `name` property is an empty string. On IE, that `name` property is undefined.
This function does no treatment about this differeneces.*

#### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *obj*     | object | The object to be listed its property keys. |

#### Return:

An array of property keys.

**Type:** Array


## Checked                                                                      
### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017-2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-prop.list-own-keys/
[npm-img]: https://img.shields.io/badge/npm-v1.0.2-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/prop.list-own-keys
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-prop.list-own-keys.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-prop.list-own-keys
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-prop.list-own-keys?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-prop-list-own-keys
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-prop.list-own-keys/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-prop.list-own-keys?branch=master
