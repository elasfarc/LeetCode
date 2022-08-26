function prefixCount(
  words: string[],
  pref: string,
  index = 0,
  ans = 0
): number {
  return index >= words.length
    ? ans
    : prefixCount(
        words,
        pref,
        index + 1,
        words[index].slice(0, pref.length) == pref ? ans + 1 : ans
      );
}
