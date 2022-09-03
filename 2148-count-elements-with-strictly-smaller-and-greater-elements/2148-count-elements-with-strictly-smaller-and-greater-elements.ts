const countElements: (nums: number[]) => number = compose(
  _countElements,
  sort(ASC)
);

function _countElements(
  nums: number[],
  max = last(nums),
  min = head(nums)
): number {
  return head(nums) === min || last(nums) === max
    ? _countElements(
        nums.slice(
          head(nums) === min ? 1 : 0,
          last(nums) === max ? nums.length - 1 : nums.length
        ),
        max,
        min
      )
    : nums.length;
}

function ASC<T>(a: T, b: T): number {
  return b > a ? -1 : 1;
}

type SortingFn<T> = (a: T, b: T) => number;
function sort<T>(sortingFn: SortingFn<T>): (list: readonly T[]) => T[] {
  return (list) => [...list].sort(sortingFn);
}

function listLength<T>(list: readonly T[]) {
  return list.length;
}

function head<T>(list: readonly T[]): T | undefined {
  return list[0];
}
function last<T>(list: readonly T[]): T | undefined {
  return list[compose(dec, listLength)(list)];
}

function dec(value: number) {
  return value - 1;
}

function compose<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R2;

function compose<TArgs extends any[]>(...fns: TArgs) {
  return (...init: TArgs) => fns.reduceRight((ans, fn) => fn(ans), init[0]);
}