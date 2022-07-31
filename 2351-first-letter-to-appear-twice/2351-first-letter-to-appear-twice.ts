type NumDict = { [k: string]: number | undefined };

function repeatedCharacter(s: string, index = 0, sTable: NumDict = {}): string {
  var char = s[index];
  sTable[char] = sTable[char] ? sTable[char]! + 1 : 1;
  return sTable[char] == 2 ? char : repeatedCharacter(s, index + 1, sTable);
}