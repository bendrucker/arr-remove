# arr-remove [![Build Status](https://travis-ci.org/bendrucker/arr-remove.svg?branch=master)](https://travis-ci.org/bendrucker/arr-remove) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/arr-remove.svg)](https://greenkeeper.io/)

> Remove elements from a copy of an array


## Install

```
$ npm install --save arr-remove
```

## Usage

```js
var remove = require('arr-remove');

remove([1, 2, 3], 1, 2) // => [1]
```

## API

#### `remove(input, index, count)` -> `array`

Performs removal on a copy of the input and returns the resulting array.

##### input

*Required*  
Type: `array`

##### index

*Required*  
Type: `number`  

The index at which to remove elements.

##### count

Type: `number`  
Default: `1`

The number of items to remove.


## License

MIT © [Ben Drucker](http://bendrucker.me)
