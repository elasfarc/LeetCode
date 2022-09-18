type DigitsMap = { [digit: string]: number | undefined };
const MIN_POSSIBLE_NUM = 100,
  MAX_POSSIBLE_NUM = 998;

function findEvenNumbers(digits: readonly number[]): number[] {
  const digitsMap = digits.reduce<DigitsMap>(
    (map, n) => ({ ...map, [n]: map[n] ? map[n]! + 1 : 1 }),
    {}
  );
  const result = [];

  for (
    let possibleNum = MIN_POSSIBLE_NUM;
    possibleNum <= MAX_POSSIBLE_NUM;
    possibleNum += 2
  ) {
    let couldBeFormed = true;
    const numDigitsMap = getDigits(possibleNum);
    for (let [digit, counter] of Object.entries(numDigitsMap))
      if (!digitsMap[digit] || counter! > digitsMap[digit]!) {
        couldBeFormed = false;
        break;
      }

    if (couldBeFormed) result.push(possibleNum);
  }
  return result;
}

//**************

function getDigits(
  n: number,
  digits: DigitsMap = {},
  isFirstRound = true
): DigitsMap {
  const digit = modulo10(n);
  const digitCounter = digits[digit] ?? 0;
  return n <= 0
    ? isFirstRound
      ? { 0: 1 }
      : digits
    : getDigits(
        intDivideBy10(n),
        {
          ...digits,
          [digit]: digitCounter + 1,
        },
        false
      );
}

function modulo10(n: number) {
  return modulo(10)(n);
}
function intDivideBy10(n: number) {
  return intDivide(10)(n);
}
function modulo(y: number): (x: number) => number {
  return (x) => x % y;
}
function divide(y: number): (x: number) => number {
  return (x) => x / y;
}

function intDivide(y: number): (x: number) => number {
  return (x) => {
    const divition = divide(y)(x);
    return Math.floor(divition);
  };
}
