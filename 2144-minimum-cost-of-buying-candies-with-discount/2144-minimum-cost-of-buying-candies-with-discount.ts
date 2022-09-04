const minimumCost: (cost: readonly number[]) => number = compose(
  _minimumCost,
  sort(DESC)
);

//*******************/

function _minimumCost(sortedCost: readonly number[], total = 0): number {
  const [max, min = 0, free, ...rest] = sortedCost;
  return sortedCost.length === 0
    ? total
    : _minimumCost(rest, total + max + min);
}

function DESC<T>(a: T, b: T): number {
  return a > b ? -1 : 1;
}
type SortingFn<T> = (a: T, b: T) => number;
function sort<T>(sortingFn: SortingFn<T>): (list: readonly T[]) => T[] {
  return (list) => [...list].sort(sortingFn);
}
function compose<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R2;

function compose<TArgs extends any[]>(...fns: TArgs) {
  return (...init: TArgs) => fns.reduceRight((ans, fn) => fn(ans), init[0]);
}
