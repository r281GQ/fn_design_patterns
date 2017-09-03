const Fold = function(value) {
  this.value = value;
};

Fold.prototype.reduce = function(fn, init) {
  if (this.value instanceof Array) {
    let sum = init;
    for (let i = 0; i < this.value.length; i++) {
      sum = fn(sum, this.value[i]);
    }
    return sum;
  }
  return 1;
};

module.exports = Fold;
