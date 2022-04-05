
// /**
//  * @param {number} x
//  * @return {boolean}
//  */

function isPalindrome(x) {
  if(isNegative(x)) return false;
  if(isOneDigit(x)) return true;
  var digits = extractDigits(x);
  while (digits.length > 1){
    let head = digits[0],
        last = digits[digits.length - 1];
    if(head != last ) return false;
    digits = digits.slice(1, -1)
  }
  return true
}


// //***

function isOneDigit(n) {
  return divideToInt(10)(n) == 0;
}

function isNegative(n) {
  return Math.sign(n) == -1;
}

function extractDigits(n, digits = []) {
  return n == 0
    ? digits
    :  converge(extractDigits, [
        divideToInt(10),
        compose(appendTo(digits), mod(10)),
      ])(n);
}

function divideToInt(y) {
  return function (x) {
    return Math.floor(x / y);
  };
}


function mod(y) {
  return function (x) {
    return x % y;
  };
}

function appendTo(list) {
  return function (v) {
    return list.concat(v);
  };
}


function compose(...fns) {
  return function composed(arg) {
    return fns.reduceRight(composedReducer, arg);
  };
  //***
  function composedReducer(result, fn) {
    return fn(result);
  }
}

function converge(fn, fnsList) {
  return function converged(v) {
    return fn.apply(
      null,
      fnsList.map((f) => f(v))
    );
  };
}






