type NumIndexes = { [k: string]: number[] | undefined };
type NumsMap = {
  numIndexes: NumIndexes;
  numberOfPairs: number;
};

const initNumsMap: NumsMap = { numIndexes: {}, numberOfPairs: 0 };

function countPairs(nums: number[], k: number): number {
  return nums.reduce<NumsMap>(({ numIndexes, numberOfPairs }, n, i) => {
    const updatedNumIndexes: NumIndexes = {
      ...numIndexes,
      [n]: numIndexes[n] ? [...numIndexes[n]!, i] : [i],
    };

    return {
      numIndexes: updatedNumIndexes,
      numberOfPairs: Boolean(numIndexes[n] && numIndexes[n]!.length > 0)
        ? compose(
            add(numberOfPairs),
            getLength,
            filter(compose(isDivisible(k), tupleMultiply)),
            getPossiblePairs(numIndexes[n]!)
          )(i)
        : numberOfPairs,
    };
  }, initNumsMap).numberOfPairs;
}
//*************************HELPERS********************* */
function getPossiblePairs(arg: number[]): (n: number) => [number, number][] {
  return (n) => arg.map((ele) => [ele, n]);
}

function isDivisible(y: number): (x: number) => boolean {
  return compose(eqls(0), modulo(y));
}
function tupleMultiply(tuble: [number, number]): number {
  return tuble[0] * tuble[1];
}

function getLength(list: any[]): number {
  return list.length;
}
//***********************UTILS************************* */

function add(y: number): (x: number) => number {
  return (x) => x + y;
}
function eqls(y: any): (x: number) => boolean {
  return (x) => Object.is(x, y);
}
function modulo(y: number): (x: number) => number {
  return (x) => x % y;
}

function filter<T>(
  pred: (ele: T, i: number, list: T[]) => boolean
): (list: T[]) => T[] {
  return (list) => {
    let filtered = [];
    for (let i = 0; i < list.length; i++)
      if (pred(list[i], i, list)) filtered.push(list[i]);
    return filtered;
  };
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

function compose<TArgs extends any[], R1, R2, R3, R4>(
  f4: (arg: R3) => R4,
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R4;

function compose<TArgs extends any[]>(...fns: TArgs) {
  return (...init: TArgs) => fns.reduceRight((v, fn) => fn(v), init[0]);
}

  
  
  
  
  
  
  
  
  
  
