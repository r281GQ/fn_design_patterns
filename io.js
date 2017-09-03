const IO = function(value) {
  this.value = value;
};

IO.prototype.execute = function() {
  return this.value();
};

IO.prototype.toString = function() {
  return this.value.toString();
};

IO.prototype.flatMap = function(fn) {
  return new IO(() => fn(this.execute()).execute());
};

IO.prototype.map = function(fn) {
  return new IO(() => fn(this.execute()));
};

IO.prototype.join = function(fn) {
  return fn(this.value);
};

module.exports = IO;
