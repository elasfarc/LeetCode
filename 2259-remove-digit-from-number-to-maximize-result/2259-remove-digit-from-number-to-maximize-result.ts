function removeDigit(
  number: string,
  digit: string,
  index: number = 0,
  maxSub: string = "0"
): string {
  return index >= number.length
    ? maxSub
    : removeDigit(
        number,
        digit,
        index + 1,
        number[index] == digit &&
          BigInt(number.slice(0, index) + number.slice(index + 1)) >
            BigInt(maxSub)
          ? number.slice(0, index) + number.slice(index + 1)
          : maxSub
      );
}