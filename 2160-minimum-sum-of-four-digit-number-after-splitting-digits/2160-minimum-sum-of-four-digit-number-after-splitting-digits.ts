const minimumSum: (num: number) => number = compose(
  ([d1, d2, d3, d4]: number[]) => d1 * 10 + d2 * 10 + d3 + d4,
  sort(sortASC),
  getDigits
);

//*****************

function sort<T>(
  comparator: (a: T, b: T) => number
): (list: readonly T[]) => T[] {
  return (list) => [...list].sort(comparator);
}
function sortASC<T>(a: T, b: T): number {
  return b > a ? -1 : 1;
}

function getDigits(
  num: number,
  digits: readonly number[] = []
): readonly number[] {
  return num == 0
    ? digits
    : getDigits(compose(Math.floor, divide(10))(num), [
        ...digits,
        modulo(10)(num),
      ]);
}

function divide(y: number): (x: number) => number {
  return (x) => x / y;
}

function modulo(y: number): (x: number) => number {
  return (x) => x % y;
}



function compose<TArgs extends any[], R1, R2, R3>(
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...initV: TArgs) => R3;

function compose<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...initV: TArgs) => R2;

function compose<TArgs extends any[]>(...fns: TArgs) {
  return (...initV: TArgs) => fns.reduceRight((v, fn) => fn(v), initV[0]);
}
