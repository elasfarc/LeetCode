function isNotVowel(s: string) {
  return !["a", "e", "i", "o", "u"].some((vowel) => vowel == s);
}

function countVowelSubstrings(word: string): number {
  let subs = 0;
  for (let i = 0; i <= word.length - 5 ; i++) {
    if (isNotVowel(word[i])) continue;
    let containAllVowel = false;
    let vowelsMap = { [word[i]]: true };

    for (let j = i + 1; j < word.length; j++) {
      if (isNotVowel(word[j])) break;
      containAllVowel ||=
        (vowelsMap[word[j]] || (vowelsMap[word[j]] = true),
        Object.keys(vowelsMap).length == 5);
      if (containAllVowel) subs++;
    }
  }
  return subs;
}
