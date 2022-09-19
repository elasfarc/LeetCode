function targetIndices(nums: readonly number[], target: number): number[] {
  return [...nums]
    .sort(ASC)
    .reduce<number[]>((acc, n, i) => (n == target ? [...acc, i] : acc), []);
}

function ASC<T>(a: T, b: T): number {
  return a > b ? 1 : -1;
}