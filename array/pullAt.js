define(['../internal/baseFlatten', '../internal/basePullAt'], function(baseFlatten, basePullAt) {

  /**
   * Removes elements from `array` corresponding to the specified indexes and
   * returns an array of the removed elements. Indexes may be specified as an
   * array of indexes or as individual arguments.
   *
   * **Note:** Unlike `_.at`, this method mutates `array`.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to modify.
   * @param {...(number|number[])} [indexes] The indexes of elements to remove,
   *  specified as individual indexes or arrays of indexes.
   * @returns {Array} Returns the new array of removed elements.
   * @example
   *
   * var array = [5, 10, 15, 20];
   * var evens = _.pullAt(array, [1, 3]);
   *
   * console.log(array);
   * // => [5, 15]
   *
   * console.log(evens);
   * // => [10, 20]
   */
  function pullAt(array) {
    return basePullAt(array || [], baseFlatten(arguments, false, false, 1));
  }

  return pullAt;
});
