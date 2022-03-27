/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  var nextGreatNumDic = nums2.reduce(
    (hashTable, num, i, list) =>
      hashTable.set(
        num,
        compose(
          ifElse(compose(equals(0), length), always(-1), head),
          until(
            either(compose(lt(num), head), compose(equals(0), length)),
            compose(tail)
          ),
          converge(slice(i), [length, identity])
        )(list)
      ),
    new Map()
  );
  return nums1.map((n) => nextGreatNumDic.get(n));
};

// helpers
// general functions

var curryN = function (arity, fn) {
  return function curried(...args) {
    return args.length >= arity ? fn(...args) : curried.bind(null, ...args);
  };
};

function compose(...fns) {
  return function composed(init) {
    return fns.reduceRight((ans, fn) => fn(ans), init);
  };
}

function converge(fn, fns) {
  return function (v) {
    return fn.apply(
      null,
      fns.map((f) => f(v))
    );
  };
}

function always(v) {
  return function () {
    return v;
  };
}

function identity(v) {
  return v;
}

//logic
function ifElse(pred, onTrue, onFalse) {
  return function (v) {
    return pred(v) ? onTrue(v) : onFalse(v);
  };
}

function until(pred, fn) {
  return function (v) {
    while (!pred(v)) {
      v = fn(v);
    }
    return v;
  };
}

function either(f, g) {
  return function satisForG(...args) {
    return f(...args) || g(...args);
  };
}

//list
function length(list) {
  return list.length;
}
function slice(start) {
  return function (end, list) {
    return list.slice(start, end);
  };
}

function head(list) {
  return list[0];
}

function tail(list) {
  return list.slice(1, list.length);
}

// relation
function equals(x) {
  return function (y) {
    return x === y;
  };
}

function lt(x) {
  return function (y) {
    return x < y;
  };
}