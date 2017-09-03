const Functor = require('./functor');

const Maybe = function(value) {
  if (value === null || typeof value === 'undefined') return new Nothing();

  return new Just(value);
};

Maybe.prototype.join = function() {
  return this.value;
};

Maybe.of = function(value) {
  return new Maybe(value);
};

const Just = function(value) {
  this.value = value;
};

Just.prototype = Object.create(Maybe.prototype);

Just.prototype.map = function(fn) {
  return new Maybe(fn(this.value));
};

Just.prototype.getOrDefault = function(fn) {
  return this.join();
};

const Nothing = function() {};

Nothing.prototype = Object.create(Maybe.prototype);

Nothing.prototype.map = function(fn) {
  return this;
};

Nothing.prototype.getOrDefault = function(or) {
  return or;
};

module.exports = Maybe;
