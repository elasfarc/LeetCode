type NumsOccurance = { [k: string]: number };
type NumsTable = {
  numOcc: NumsOccurance;
  pairs: number;
  leftOver: number;
};

const initNumsTable: NumsTable = { numOcc: {}, pairs: 0, leftOver: 0 };
const _isOdd = compose(eqls(1), modulo(2));
const _isEven = complement(_isOdd);

const numberOfPairs: (nums: number[]) => number[] = compose(
  props(["pairs", "leftOver"]),
  reduce<NumsTable, number>(reducer, initNumsTable)
);

// *********************HELPERS*************************

function reducer({ numOcc, pairs, leftOver }:NumsTable, n:number ):NumsTable{
  const updatedNumsOcc: NumsOccurance = {
      ...numOcc,
      [n]: numOcc[n] ? numOcc[n] + 1 : 1,
    };
    return {
      numOcc: updatedNumsOcc,
      pairs: ifElse(always(_isEven(updatedNumsOcc[n])), inc, identity)(pairs),
      leftOver: ifElse(always(_isOdd(updatedNumsOcc[n])), inc, dec)(leftOver),
    };
}


// **********************UTILS************************


function props<KEY extends keyof OBJ, OBJ>(keys: KEY[]) {
  return (obj: OBJ) => keys.map((k) => obj[k]);
}

function complement<T>(f: (arg: T) => boolean): (arg: T) => boolean {
  return (arg) => !f(arg);
}

function modulo(base: number): (n: number) => number {
  return (n) => n % base;
}

function eqls<T>(y: T): (x: T) => boolean {
  return (x) => x === y;
}

function inc(n: number): number {
  return n + 1;
}

function dec(n: number): number {
  return n - 1;
}

function identity<T>(arg: T): T {
  return arg;
}

function always<T>(arg: T): () => T {
  return () => arg;
}

function ifElse<T, Rtrue, Rfalse>(
  condition: (arg: T) => boolean,
  onTrue: (arg: T) => Rtrue,
  onFalse: (arg: T) => Rfalse
): (arg: T) => Rtrue | Rfalse {
  return (arg) => (condition(arg) ? onTrue(arg) : onFalse(arg));
}

function compose<TArgs extends any[], R1, R2>(
  f2: (arg0: R1) => R2,
  f1: (...args: TArgs) => R1
): (...init: TArgs) => R2 {
  return function composed(...init) {
    return f2(f1(...init));
  };
}


function reduce<T, ArrT>(
  reducer: (acc: T, current: ArrT, index: number, list: ArrT[]) => T,
  init: T
): (list: ArrT[]) => T {
  return (list) => {
    let memo = init;
    for (let i = 0; i < list.length; i++)
      memo = reducer(memo, list[i], i, list);
    return memo;
  };
}


