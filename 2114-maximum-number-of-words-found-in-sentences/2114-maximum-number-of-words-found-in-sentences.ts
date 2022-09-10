const LEAST_SENTENCE_LENGTH = 1;

function mostWordsFound(sentences: string[]): number {
  return sentences.reduce((currentMax, sentence) => {
    const WordsInSentence = sentence.split(" ").length;
    return WordsInSentence > currentMax ? WordsInSentence : currentMax;
  }, LEAST_SENTENCE_LENGTH);
}