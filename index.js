'use strict'

module.exports = function arrayRemove (array, index, count) {
  if (!count) count = 1
  var beginning = array.slice(0, index)
  var end = array.slice(index + count)
  return beginning.concat(end)
}
