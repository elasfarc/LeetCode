function countAsterisks(
  s: string,
  index = 0,
  starCounter = 0,
  skipNext = false
): number {
  return index >= s.length
    ? starCounter
    : countAsterisks(
        s,
        index + 1,
        !skipNext && s[index] == "*" ? starCounter + 1 : starCounter,
        skipNext ? (s[index] == "|" ? false : true) : (s[index] == "|" ? true : false)
      );
}