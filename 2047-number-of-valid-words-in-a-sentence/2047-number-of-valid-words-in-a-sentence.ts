function countValidWords(sentence: string): number {
  let validWords = 0;
  for (let token of sentence.split(" "))
    validWords += token && isValidToken(token) ? 1 : 0;

  return validWords;
}

//**** */

function isValidToken(token: string): boolean {
  let hyphenCounter = 0;
  for (let i = 0; i < token.length; i++) {
    const char = token[i];
    if (
      isDigit(char) ||
      (eqls("-")(char) && ++hyphenCounter && !isValidHyphen(i, token, hyphenCounter)) ||
      (isPunctuation(char) && !isValidPunctuation(i, token))
    )
      return false;
  }
  return true;
}

function isDigit(char: string) {
  return !isNaN(Number(char));
}

function isPunctuation(char: string) {
  return ["!", ".", ","].some(eqls(char));
}

function isValidPunctuation(index: number, word: string) {
  return index == word.length - 1;
}

function isValidHyphen(index: number, word: string, hyphenCounter: number) {
  return hyphenCounter > 1
    ? false
    : word[index - 1] &&
        word[index + 1] &&
        isLowercaseChar(word[index - 1]) &&
        isLowercaseChar(word[index + 1]);
}

function isLowercaseChar(char: string) {
  const charCode = char.charCodeAt(0);
  return charCode >= 97 && charCode <= 122;
}

function eqls(a: any) {
  return (b: any) => Object.is(a, b);
}
