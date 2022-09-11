function firstPalindrome(words: readonly string[], index = 0): string {
  const word = words[index];
  return index >= _length(words)
    ? ""
    : isPalindromic(word)
    ? word
    : firstPalindrome(words, index + 1);
}

//******************

function isPalindromic(str: string, firstIdx = 0, lastIdx = str.length - 1 ): boolean {
  return firstIdx >= lastIdx
    ? true
    : str[firstIdx] == str[lastIdx]
    ? isPalindromic(str, inc(firstIdx), dec(lastIdx))
    : false
}

function inc(n: number) {
  return n + 1;
}
function dec(n: number) {
  return n - 1;
}

function _length<T extends any[] | ArrayLike<any> | string>(v: T) {
  return v.length;
}