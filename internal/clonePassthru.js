define(['./isCloneable'], function(isCloneable) {

  /** Used as a safe reference for `undefined` in pre ES5 environments. */
  var undefined;

  /**
   * Used by `_.matches` to clone `source` values, letting uncloneable values
   * passthu instead of returning empty objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   */
  function clonePassthru(value) {
    return isCloneable(value) ? undefined : value;
  }

  return clonePassthru;
});
