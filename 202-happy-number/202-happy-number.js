/**
 * @param {number} n
 * @return {boolean}
 */
var until = curryN(3, until);
var ifElse = curryN(4, ifElse);
var converge = curryN(3, converge);
const equals = curryN(2, (x, y) => x === y);
const dec = (num) => num - 1;
const length = (arr) => arr.length;
const nth = curryN(2, (idx, arr) => arr[idx]);
const head = nth(0);
const last = converge(nth)([compose(dec, length), identity]);
const mod = (y) => (x) => x % y;
const powerTo = (power) => (n) => Math.pow(n, power);
const append = curryN(2, (v, list) => [...list, v]);
const of = (v) => [v];
const not =
  (fn) =>
  (...args) =>
    !fn(...args);
const divideIntoInt = (y) => (x) => parseInt(x / y, 10);
const add = curryN(2, (x, y) => x + y)

const sumDigitsPowTwo = compose(
  until(compose(call(not, equals(0)), mod(10)), divideIntoInt(10)),
  last,
  until(
    compose(equals(0), head),
    converge(pair, [
      compose(divideIntoInt(10), head),
      converge(add, [
        compose(powerTo(2), mod(10), head),
        compose(identity, last),
      ]),
    ])
  ),
  compose(append(0), of)
);

var isHappy = ifElse(
  equals(0),
  F,
  compose(
    ifElse(equals(1), T, F),
    until(call(either, equals(1), equals(2)), sumDigitsPowTwo)
  )
);

//.....
//helpers
//.....

// general functions
function curryN(arity, fn) {
  return function curried(...args) {
    return args.length >= arity ? fn(...args) : curried.bind(null, ...args);
  };
}

function compose(...fns) {
  return function composed(init) {
    return fns.reduceRight((ans, fn) => fn(ans), init);
  };
}
function converge(fn, fns, v) {
  return fn.apply(
    null,
    fns.map((f) => f(v))
  );
}
function call(fn, ...args) {
  return fn(...args);
}
function F() {
  return false;
}
function T() {
  return true;
}
function identity(v) {
  return v;
}

//logic
function ifElse(pred, onTrue, onFalse, v) {
  return pred(v) ? onTrue(v) : onFalse(v);
}
function until(pred, fn, v) {
  while (!pred(v)) {
    v = fn(v);
  }
  return v;
}

function either(f, g) {
  return function satisForG(...args) {
    return f(...args) || g(...args);
  };
}

//list

function pair(x, y) {
  return [x, y];
}
