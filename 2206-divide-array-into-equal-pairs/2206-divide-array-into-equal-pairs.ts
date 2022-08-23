function divideArray(nums: number[]): boolean {
  return [
    ...nums
      .reduce<Map<number, number>>(
        (map, n) => map.set(n, map.has(n) ? map.get(n) + 1 : 1),
        new Map()
      )
      .values(),
  ].every(isEven);
}

function isEven(n: number): boolean {
  return n % 2 == 0;
}