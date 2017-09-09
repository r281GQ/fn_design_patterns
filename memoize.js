module.exports = function(fn) {
  //local cache
  const closureScopedCache = {};

  return function() {
    //simple key representation of the arguments
    const args = Array.prototype.slice.call(arguments);

    //if it present return the value
    if (args in closureScopedCache) return closureScopedCache[args];


    //if not calculate it
    const value = fn(...args);
    //store it to the cache
    closureScopedCache[args] = value;
    //return the value
    return value;
  };
};
