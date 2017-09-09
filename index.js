const memoize = require('./memoize');
const Functor = require('./functor');
const Maybe = require('./maybe');
const Either = require('./either');
const IO = require('./io');
const Fold = require('./fold');
const curry = require('./curry');

//Memoize
const addNumbers = (a, b) => a + b;

const memoizedAdd = memoize(addNumbers);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));

//Functor
console.log(
  Functor.of(1)
    .map(x => x + 12)
    .map(x => x - 2)
    .join()
);

//Maybe monad
console.log(
  Maybe.of(2)
    .map(x => x + 2)
    .map(x => x + 1)
    .getOrDefault('def val')
);

console.log(
  Maybe.of(null)
    .map(x => x + 2)
    .getOrDefault('def val')
);

//Either monad
const cannotBeGreaterThanTen = number =>
  number > 10
    ? Either.left(new Error('greater than then 10'))
    : Either.right(number);

const error = error => console.log(error.message);
const success = value => console.log(value);

Either.either(success, error)(cannotBeGreaterThanTen(8));

Either.either(success, error)(cannotBeGreaterThanTen(11));

//IO monad
const logger = x => new IO(() => console.log(x));

const upperCase = x => x.toUpperCase();

new IO(() => 'hi there')
  .map(upperCase)
  .flatMap(logger)
  .execute();

//Fold
console.log(new Fold([1, 2, 3, 4, 5]).reduce((sum, item) => sum + item, 0));

//Curry
const method = (a, b) => a + b;

const curriedMethod = curry(method);
const curriedMethodWithFirstArg = curriedMethod(1);

console.log(curriedMethodWithFirstArg(1));
