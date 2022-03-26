/**
 * @param {number[]} nums
 * @return {number}
 */
var ifElse = curryN(4, ifElse);
var filter = curryN(2, filter);

const gt = curryN(2, (x, y) => x > y);
const lt = curryN(2, (x, y) => x < y);
const equals = curryN(2, (x, y) => x === y);
const mod = (y) => (x) => x % y;
const orderASC = (a, b) => a - b;
const nth = curryN(2, (idx, arr) => arr[idx]);
const head = nth(0);
const isOdd = compose(equals(1), mod(2));

const sign = cond([
  [equals(0), always(0)],
  [lt(0), always(1)],
  [gt(0), always(-1)],
]);

var arraySign = compose(
  ifElse(
    includes(0),
    always(0),
    compose(
      ifElse(isOdd, always(-1), always(1)),
      length,
      filter(compose(equals(-1), sign))
    )
  ),
  sort(orderASC)
);

console.log(arraySign([1, 5, 0, 2, -3]));

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

function always(v) {
  return function () {
    return v;
  };
}
// logic
function ifElse(pred, onTrue, onFalse, v) {
  return pred(v) ? onTrue(v) : onFalse(v);
}

function cond(pairs) {
  return function f(v) {
    var answer;
    for (let [predicate, transformer] of pairs) {
      if (predicate(v)) {
        answer = transformer(v);
        break;
      }
    }
    return answer;
  };
}

//list
function filter(pred, list) {
  return list.filter(pred);
}
function sort(sortBy) {
  return function (list) {
    return [...list].sort(sortBy);
  };
}
function length(list) {
  return list.length;
}
function includes(ele) {
  return (list) => list.includes(ele);
}
