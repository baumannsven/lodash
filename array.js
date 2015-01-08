define(['./array/chunk', './array/compact', './array/difference', './array/drop', './array/dropRight', './array/dropRightWhile', './array/dropWhile', './array/findIndex', './array/findLastIndex', './array/first', './array/flatten', './array/flattenDeep', './array/indexOf', './array/initial', './array/intersection', './array/last', './array/lastIndexOf', './array/pull', './array/pullAt', './array/remove', './array/rest', './array/slice', './array/sortedIndex', './array/sortedLastIndex', './array/take', './array/takeRight', './array/takeRightWhile', './array/takeWhile', './array/union', './array/uniq', './array/unzip', './array/without', './array/xor', './array/zip', './array/zipObject'], function(chunk, compact, difference, drop, dropRight, dropRightWhile, dropWhile, findIndex, findLastIndex, first, flatten, flattenDeep, indexOf, initial, intersection, last, lastIndexOf, pull, pullAt, remove, rest, slice, sortedIndex, sortedLastIndex, take, takeRight, takeRightWhile, takeWhile, union, uniq, unzip, without, xor, zip, zipObject) {

  return {
    'chunk': chunk,
    'compact': compact,
    'difference': difference,
    'drop': drop,
    'dropRight': dropRight,
    'dropRightWhile': dropRightWhile,
    'dropWhile': dropWhile,
    'findIndex': findIndex,
    'findLastIndex': findLastIndex,
    'first': first,
    'flatten': flatten,
    'flattenDeep': flattenDeep,
    'head': first,
    'indexOf': indexOf,
    'initial': initial,
    'intersection': intersection,
    'last': last,
    'lastIndexOf': lastIndexOf,
    'object': zipObject,
    'pull': pull,
    'pullAt': pullAt,
    'remove': remove,
    'rest': rest,
    'slice': slice,
    'sortedIndex': sortedIndex,
    'sortedLastIndex': sortedLastIndex,
    'tail': rest,
    'take': take,
    'takeRight': takeRight,
    'takeRightWhile': takeRightWhile,
    'takeWhile': takeWhile,
    'union': union,
    'uniq': uniq,
    'unique': uniq,
    'unzip': unzip,
    'without': without,
    'xor': xor,
    'zip': zip,
    'zipObject': zipObject
  };
});
