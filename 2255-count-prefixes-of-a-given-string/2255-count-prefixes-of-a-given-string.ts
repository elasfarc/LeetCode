function countPrefixes(
  words: string[],
  s: string,
  index: number = 0,
  counter: number = 0
): number {
  var word = words[index];
  return index >= words.length
    ? counter
    : countPrefixes(
        words,
        s,
        index + 1,
        isPrefix(word, s) ? counter + 1 : counter
      );
}

function isPrefix(word: string, s: string, index: number = 0): boolean {
  return index >= word.length
    ? true
    : word[index] === s[index]
    ? isPrefix(word, s, index + 1)
    : false;
}