'use strict'

var test = require('tape')
var remove = require('./')

test(function (t) {
  t.deepEqual(remove([1, 2, 3], 0, 1), [2, 3])
  t.deepEqual(remove([1, 2, 3], 0, 2), [3])
  t.deepEqual(remove([1, 2, 3], 0, 4), [])
  t.deepEqual(remove([1, 2, 3], 1, 1), [1, 3])
  t.deepEqual(remove([1, 2, 3], 1), [1, 3])
  t.end()
})
