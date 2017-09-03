const Functor = function(value) {
  this.value = value;
};

Functor.prototype.map = function(fn) {
  return new Functor(fn(this.value));
};

Functor.prototype.join = function() {
  return this.value;
};

Functor.of = function(value) {
  return new Functor(value);
};

module.exports = Functor;
