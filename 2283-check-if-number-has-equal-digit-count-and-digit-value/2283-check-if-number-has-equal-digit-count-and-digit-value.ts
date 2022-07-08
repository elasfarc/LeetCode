type Dict = {
  [k: string]: number | undefined;
};
type SetDigitMap = (index: number) => (acc: Dict) => (source: string) => Dict;
const _setDigitMap: SetDigitMap = (i) => (acc) => (source) =>
  i >= source.length
    ? acc
    : _setDigitMap(i + 1)({
        ...acc,
        [source[i]]: acc[source[i]] ? ++acc[source[i]]! : 1,
      })(source);

type DigitCount = (
  index: number
) => (digitMap: Dict) => (num: string) => boolean;
const _digitCount: DigitCount = (i) => (digitMap) => (num) =>
  i >= num.length
    ? true
    : +num[i] === (digitMap[i] || 0)
    ? _digitCount(i + 1)(digitMap)(num)
    : false;

const digitCount = converge<string, Dict, string, boolean>(_digitCount(0))([
  _setDigitMap(0)({}),
  (str: string) => str,
]);

// ***************************

function compose<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R2 {
  return function composed(...initV) {
    return f2(f1(...initV));
  };
}

function _converge<V, R1, R2, Result>(
  afterFn: (arg0: R1, arg1: R2) => Result
): (branches: [(arg: V) => R1, (arg: V) => R2]) => (initV: V) => Result {
  return function (branches) {
    return function (initV) {
      return afterFn.apply(null, branches.map((fn) => fn(initV)) as [R1, R2]);
    };
  };
}
function converge<V, R1, R2, Result>(
  afterFn: (arg0: R1) => (arg1: R2) => Result
): (branches: [(arg: V) => R1, (arg: V) => R2]) => (initV: V) => Result {
  return function ([f1, f2]) {
    return function (initV) {
      return afterFn(f1(initV))(f2(initV));
    };
  };
}
