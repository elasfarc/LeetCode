function firstPalindrome(words: readonly string[], index = 0): string {
  const word = words[index];
  return index >= _length(words)
    ? ""
    : isPalindromic(word)
    ? word
    : firstPalindrome(words, index + 1);
}

//******************

function isPalindromic(str: string): boolean {
  const getLastIndex = compose(dec, _length);
  const firstIdx = 0,
    lastIndex = getLastIndex(str),
    length = str.length;
  return length == 0 || length == 1
    ? true
    : str[firstIdx] == str[lastIndex]
    ? compose(
        isPalindromic,
        converge<string, string, number, string>(slice)([
          identity,
          getLastIndex,
        ]),
        slice(str)
      )(firstIdx)
    : false;
}

function _length<T extends any[] | ArrayLike<any> | string>(v: T) {
  return v.length;
}
function dec(n: number) {
  return n - 1;
}

function slice(str: string) {
  return (index: number) => str.slice(0, index) + str.slice(index + 1);
}

function identity<T>(v: T) {
  return v;
}

function compose<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R2;

function compose<TArgs extends any[], R1, R2, R3>(
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R3;

function compose<TArgs extends any[]>(...fns: TArgs) {
  return (...init: TArgs) => fns.reduceRight((ans, fn) => fn(ans), init[0]);
}

// * _Curried converge_

function converge<V, R1, R2, Result>(
  afterFn: (arg0: R1) => (arg1: R2) => Result
): (branches: [(arg: V) => R1, (arg: V) => R2]) => (initV: V) => Result {
  return function ([f1, f2]) {
    return function (initV) {
      return afterFn(f1(initV))(f2(initV));
    };
  };
}

//another approach but 'd require more steps ---- [...str].filter((c, i, str) => i != 0 || i != str.length - 1).join("")
