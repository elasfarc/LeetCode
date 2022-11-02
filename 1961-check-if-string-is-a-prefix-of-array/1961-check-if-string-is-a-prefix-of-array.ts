function isPrefixString(s: string, words: string[]): boolean {
  let currIdx = 0;

  for (let word of words) {
    if (word != s.slice(currIdx, word.length + currIdx)) return false;
    currIdx += word.length;
    if (currIdx == s.length) return true;
  }

  return false;
}