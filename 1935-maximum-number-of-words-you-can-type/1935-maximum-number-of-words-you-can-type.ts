function canBeTypedWords(text: string, brokenLetters: string): number {
  const brokenLettersMap: Map<string, boolean> = new Map();
  for (let char of brokenLetters) brokenLettersMap.set(char, true);

  return text
    .split(" ")
    .reduce(
      (counter, word) =>
        word.split("").some((char) => brokenLettersMap.has(char))
          ? counter
          : ++counter,
      0
    );
}