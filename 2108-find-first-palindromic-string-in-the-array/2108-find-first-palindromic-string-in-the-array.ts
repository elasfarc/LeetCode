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
    ? isPalindromic(
        [...str].filter((c, i, str) => i != 0 && i != str.length - 1).join("")
      )
    : false;
}

function _length<T extends any[] | ArrayLike<any> | string>(v: T) {
  return v.length;
}
function dec(n: number) {
  return n - 1;
}

function compose<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R2;

function compose<TArgs extends any[]>(...fns: TArgs) {
  return (...init: TArgs) => fns.reduceRight((ans, fn) => fn(ans), init[0]);
}