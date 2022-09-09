function isSameAfterReversals(num: number): boolean {
  return num == compose(reverseNumber, reverseNumber)(num);
}


const reverseNumber: (n: number) => number = compose(
  toNumber,
  join(""),
  reverse,
  split(""),
  toString
);



//************************************* */
function split(separator: string): (str: string) => string[] {
  return (str) => str.split(separator);
}

function reverse<T>(list: T[]): T[] {
  return list.reverse();
}

function join(separator?: string): (list: any[]) => string {
  return (list) => list.join(separator);
}

function toString(arg: any): string {
  return arg.toString();
}
function toNumber(arg: any): number {
  return Number(arg);
}

function compose<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R2;

function compose<TArgs extends any[], R1, R2, R3, R4, R5>(
  f5: (arg: R4) => R5,
  f4: (arg: R3) => R4,
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R5;

function compose<TArgs extends any[]>(...fns: TArgs) {
  return (...init: TArgs) => fns.reduceRight((ans, fn) => fn(ans), init[0]);
}

