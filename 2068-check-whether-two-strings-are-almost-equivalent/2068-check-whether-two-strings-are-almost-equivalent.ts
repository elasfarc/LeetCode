function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const map1 = getCharOccurance(word1);
  const map2 = getCharOccurance(word2);
  for (let char of map1.keys())
    if (!checkChar(map1.get(char), map2.get(char))) return false;
  for (let char of map2.keys())
    if (!checkChar(map1.get(char), map2.get(char))) return false;
  return true;
}

function getCharOccurance(word: string): Map<string, number> {
  const charsTable: Map<string, number> = new Map();
  for (let char of word) charsTable.set(char, (charsTable.get(char) ?? 0) + 1);
  return charsTable;
}

function checkChar(
  occ1: number | undefined,
  occ2: number | undefined
): boolean {
  return Math.abs((occ1 ?? 0) - (occ2 ?? 0)) <= 3;
}