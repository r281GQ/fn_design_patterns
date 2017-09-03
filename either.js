const Either = function() {};

Either.either = function(succesHandler, failureHandler) {
  return function(either) {
    either instanceof Right
      ? succesHandler(either.join())
      : failureHandler(either.join());
  };
};

Either.left = function(value) {
  return new Left(value);
};

const Left = function(value) {
  this.value = value;
};

Left.prototype.map = function(fn) {
  return this;
};

Left.prototype.join = function(fn) {
  return this.value;
};

Either.right = function(value) {
  return new Right(value);
};

const Right = function(value) {
  this.value = value;
};

Right.prototype.map = function(fn) {
  return new Right(fn(this.value));
};

Right.prototype.join = function(fn) {
  return this.value;
};

module.exports = Either;
