type WordsOccurrence = Map<string, number>;
const eqls1 = eqls(1);

function countWords(words1: string[], words2: string[]): number {
  const map1 = getWordsOccurrence(words1),
    map2 = getWordsOccurrence(words2);

  const shortestList = words1.length < words2.length ? words1 : words2;

  return shortestList.reduce(
    (counter, word) =>
      eqls1(map1.get(word)) && eqls1(map2.get(word)) ? ++counter : counter,
    0
  );
}

function getWordsOccurrence(words: string[]): WordsOccurrence {
  return words.reduce<WordsOccurrence>(
    (map, word) => map.set(word, (map.get(word) ?? 0) + 1),
    new Map()
  );
}

function eqls(y: any) {
  return (x: any) => Object.is(y, x);
}