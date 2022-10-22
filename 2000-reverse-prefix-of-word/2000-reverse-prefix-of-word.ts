function reversePrefix(word: string, ch: string): string {
  let reversed = "";
  for (let i = 0; i < word.length; i++) {
    reversed = word[i] + reversed;
    if (word[i] == ch) return reversed + word.slice(i + 1);
  }

  return word;
}
