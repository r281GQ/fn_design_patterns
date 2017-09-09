module.exports = function(fn) {
  //number of arguments the wrapped function has
  const { length } = fn;

  //named function usage due to recursion
  return function curry() {
    //invoking the function for the first times and convert the arguments to normal array for ease of use
    const currentArguments = Array.prototype.slice.call(arguments);

    //two scenarios: either the function is called with the exact amount of args. This case there is nothing to do just call the method
    //example: original method: const add = (a,b) => a+b   cont curreid = curry(add)   add(1,2) === curreid(1,2)
    if (length <= currentArguments.length) {
      return fn.apply(null, currentArguments);
    } else {
      //or it has less arguments than the original function
      return function() {
        //this case we kepp calling the recursive function with the current and the next arguments combined until we reach the base case
        //this is possible because closure scoped the current arguments are to the next ones
        return curry.apply(
          null,
          currentArguments.concat(Array.prototype.slice.call(arguments))
        );
      };
    }
  };
};
