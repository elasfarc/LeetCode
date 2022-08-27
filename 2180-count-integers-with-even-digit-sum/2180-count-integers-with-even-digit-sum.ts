function countEven(num: number, index = 2, counter = 0): number {
  return index > num
    ? counter
    : countEven(
        num,
        index + 1,
        compose(isEven, sum, getDigits)(index) ? inc(counter) : counter
      );
}


function getDigits(n: number, digits: number[] = []): number[] {
  return n <= 0 ? digits : getDigits(Math.floor(n / 10), [...digits, n % 10]);
}

function sum(nums: number[]): number {
  return nums.reduce((sum, n) => sum + n, 0);
}

function isEven(n: number): boolean {
  return compose(eqls(0), modulo(2))(n);
}

function eqls(y: any): (x: number) => boolean {
  return (x) => Object.is(x, y);
}

function modulo(y: number): (x: number) => number {
  return (x) => x % y;
}

function inc(n: number): number {
  return n + 1;
}

function unless<T>(
  pred: (arg: T) => boolean,
  onFalse: (arg: T) => T
): (arg: T) => T {
  return (arg) => (pred(arg) ? arg : onFalse(arg));
}


function compose<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R2;

function compose<TArgs extends any[], R1, R2, R3>(
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R3;

function compose<TArgs extends any[]>(...fns: TArgs) {
  return (...init: TArgs) => fns.reduceRight((v, fn) => fn(v), init);
}
