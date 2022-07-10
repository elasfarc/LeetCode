function removeAnagrams(words: string[]): string[] {
  const results: string[] = [];
  let lastChecked = "";
  for (let i = 0; i < words.length; i++) {
    if (!isAnagrams(lastChecked)(words[i])) {
      results.push(words[i]);
      lastChecked = words[i];
    }
  }

  return results;
}

//****

function isAnagrams(w1: string): (w2: string) => boolean {
  const w1Chars = [...w1].sort();
  return (w2, w2Chars = [...w2].sort()) =>
    w1.length === w2.length && w1Chars.every((c, i) => c == w2Chars[i]);
}
