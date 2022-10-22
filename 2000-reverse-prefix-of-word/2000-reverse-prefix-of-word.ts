function reversePrefix(word: string, ch: string): string {
  for (let i = 0; i < word.length; i++)
    if (word[i] == ch) return reverse(word.slice(0, i + 1)) + word.slice(i + 1);

  return word;
}

function reverse(word: string) {
  return [...word].reduce((prev, next) => next + prev);
}
