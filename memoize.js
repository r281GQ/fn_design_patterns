module.exports = function(fn) {
  const closureScopedCache = {};

  return function() {
    const args = Array.prototype.slice.call(arguments);

    if (args in closureScopedCache) return closureScopedCache[args];

    const value = fn(...args);
    closureScopedCache[args] = value;
    return value;
  };
};
