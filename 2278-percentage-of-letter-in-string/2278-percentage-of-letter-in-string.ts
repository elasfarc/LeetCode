type Dict = {
  [k: string]: number | undefined;
};

function percentageLetter(
  s: string,
  letter: string,
  index: number = 0,
  map: Dict = {}
): number {
  const char = s[index];
  return index >= s.length
    ? Math.floor(((map[letter] ?? 0) * 100) / s.length)
    : percentageLetter(s, letter, index + 1, {
        ...map,
        [char]: map[char] ? ++map[char]! : 1,
      });
}