type Dict = {
  [k: string]: number | undefined;
};

//recursive 

function _percentageLetter(
  s: string,
  letter: string,
  index: number = 0,
  map: Dict = {}
): number {
  const char = s[index];
  return index >= s.length
    ? Math.floor(((map[letter] ?? 0) * 100) / s.length)
    : _percentageLetter(s, letter, index + 1, {
        ...map,
        [char]: map[char] ? ++map[char]! : 1,
      });
}



function percentageLetter(s: string, letter: string): number {
  let map: Dict = {};
  for (let char of s) {
    map[char] = map[char] ? ++map[char]! : 1;
  }
  return Math.floor(((map[letter] ?? 0) * 100) / s.length);
}