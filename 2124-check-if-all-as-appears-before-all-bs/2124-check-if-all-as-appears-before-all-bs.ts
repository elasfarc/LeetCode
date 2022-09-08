function checkString(s: string, isFirstB = false, index = 0): boolean {
  const char = s[index];
  return index >= s.length
    ? true
    : char == "a" && isFirstB
    ? false
    : checkString(s, isFirstB ? true : char == "b", index + 1);
}