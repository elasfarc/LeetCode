const convertTime = (current: string, correct: string): number =>
  _compose2<[[string, string]], number, number>(
    getNumOfOperation,
    _converge(
      sub,
      _compose2(getTotalMinutes, head),
      _compose2(getTotalMinutes, tail)
    )
  )([correct, current]);

////************** HELPERS **************/

function getTotalMinutes(time: string): number {
  const [h1, h2, , m1, m2] = time.split("");
  return +h1 * 10 * 60 + +h2 * 60 + +m1 * 10 + +m2;
}

function sub(a: number, b: number) {
  return a - b;
}

function getNumOfOperation(minutesDiff: number, noOfOperation = 0): number {
  return minutesDiff == 0
    ? noOfOperation
    : getNumOfOperation(
        minutesDiff - 60 >= 0
          ? minutesDiff - 60
          : minutesDiff - 15 >= 0
          ? minutesDiff - 15
          : minutesDiff - 5 >= 0
          ? minutesDiff - 5
          : minutesDiff - 1,
        noOfOperation + 1
      );
}

////************** UTILS **************/

function head<T>(list: T[]): T {
  return list[0];
}

function tail<T>(list: T[]): T {
  return list[list.length - 1];
}

function _compose2<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R2 {
  return (...init) => f2(f1(...init));
}

function _converge<R, F1R, F2R, InitV>(
  after: (arg0: F1R, arg1: F2R) => R,
  f1: (arg: InitV) => F1R,
  f2: (arg: InitV) => F2R
): (init: InitV) => R {
  return (init) => after(f1(init), f2(init));
}
