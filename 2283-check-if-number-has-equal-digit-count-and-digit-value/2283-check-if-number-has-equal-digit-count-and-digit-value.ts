type Dict = {
  [k: string]: number | undefined;
};


const getDigitMap = (num: string, i: number = 0, acc: Dict = {}): Dict =>
  i >= num.length
    ? acc
    : getDigitMap(num, i + 1, {
        ...acc,
        [num[i]]: acc[num[i]] ? ++acc[num[i]]! : 1,
      });

function digitCount(
  num: string,
  i: number = 0,
  digitMap = getDigitMap(num)
): boolean {
  return i >= num.length
    ? true
    : +num[i] === (digitMap[i]  || 0)
    ? digitCount(num, i + 1)
    : false;
}