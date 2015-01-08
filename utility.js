define(['./utility/attempt', './utility/callback', './utility/constant', './utility/identity', './utility/matches', './utility/mixin', './utility/noop', './utility/property', './utility/propertyOf', './utility/range', './utility/times', './utility/uniqueId'], function(attempt, callback, constant, identity, matches, mixin, noop, property, propertyOf, range, times, uniqueId) {

  return {
    'attempt': attempt,
    'callback': callback,
    'constant': constant,
    'identity': identity,
    'iteratee': callback,
    'matches': matches,
    'mixin': mixin,
    'noop': noop,
    'property': property,
    'propertyOf': propertyOf,
    'range': range,
    'times': times,
    'uniqueId': uniqueId
  };
});
