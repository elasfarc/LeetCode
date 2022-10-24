const filterOddIndexes = filter((ele, i) => isOdd(i));
const filterEvenIndexes = filter((ele, i) => isEven(i));

const sortEvenOdd: (nums: number[]) => number[] = converge(merge, [
  compose(sort<number>(ASC), filterEvenIndexes),
  compose(sort<number>(DESC), filterOddIndexes),
]);

function merge(list1: number[], list2: number[]) {
  const merged: number[] = [];
  for (let i = 0; i < list1.length; i++) {
    merged.push(list1[i]);
    if (list2[i]) merged.push(list2[i]);
  }

  return merged;
}

function isEven(n: number) {
  return n % 2 == 0;
}
function isOdd(n: number) {
  return !isEven(n);
}

function ASC<T>(a: T, b: T): number {
  return b > a ? -1 : 1;
}

function DESC<T>(a: T, b: T) {
  return a > b ? -1 : 1;
}

function sort<T>(compareFn: (a: T, b: T) => number): (list: T[]) => T[] {
  return (list) => [...list].sort(compareFn);
}

function filter<ListT>(
  predicate: (ele: ListT, index: number, list: readonly ListT[]) => boolean
): (list: readonly ListT[]) => ListT[] {
  return (list) => {
    const filtered: ListT[] = [];
    for (let i = 0; i < list.length; i++)
      if (predicate(list[i], i, list)) filtered.push(list[i]);
    return filtered;
  };
}

function converge<TArgs extends any[], R1, R2, ANS>(
  after: (arg0: R1, arg1: R2) => ANS,
  fnsList: [fn1: (...args: TArgs) => R1, fn2: (...args: TArgs) => R2]
): (...args: TArgs) => ANS {
  return (...args) => {
    return after(...(fnsList.map((fn) => fn(...args)) as [R1, R2]));
  };
}

function compose<TArgs extends any[], R1, R2>(
  f2: (...args: TArgs) => R2,
  f1: (...args: TArgs) => R1
): (...initArgs: TArgs) => R2;

function compose<TArgs extends any[]>(...fns: TArgs) {
  return (...initArgs: TArgs) =>
    fns.reduceRight((acc, fn) => fn(acc), initArgs[0]);
}
