function minTimeToType(word: string): number {
  let minTime = word.length;
  let current = "a";
  for (let char of word) {
    minTime += getMinLengthFromTo(current, char);
    current = char;
  }
  return minTime;
}

/********/

function getCharCode(char: string): number {
  return char.charCodeAt(0);
}

function getCharOrder(char: string): number {
  const FIRST_CHAR_CODE = 97;
  return getCharCode(char) - FIRST_CHAR_CODE + 1;
}

function getMinLengthFromTo(source: string, dest: string) {
  const sourceOrder = getCharOrder(source);
  const destinationOrder = getCharOrder(dest);

  return Math.min(
    getClockwiseLength(sourceOrder, destinationOrder),
    getCounterclockwiseLength(sourceOrder, destinationOrder)
  );
}

function getClockwiseLength(sourceOrder: number, destOrder: number) {
  const LAST_CHAR_ORDER = 26;
  return sourceOrder <= destOrder
    ? destOrder - sourceOrder
    : LAST_CHAR_ORDER - sourceOrder + destOrder;
}

function getCounterclockwiseLength(sourceOrder: number, destOrder: number) {
  const LAST_CHAR_ORDER = 26;
  return sourceOrder <= destOrder
    ? LAST_CHAR_ORDER - destOrder + sourceOrder
    : sourceOrder - destOrder

}



