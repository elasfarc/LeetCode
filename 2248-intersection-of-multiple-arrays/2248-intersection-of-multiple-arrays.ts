function intersection(nums: number[][]): number[] {
  const [first, ...rest] = nums;

  const _map: Map<number, number> = first.reduce(
    (map, n) => map.set(n, 1),
    new Map<number, number>()
  );
  return [
    ...rest.reduce<Map<number, number>>(
      (map, arr) =>
        arr.reduce(
          (mapCopy, n) =>
            mapCopy.set(n, mapCopy.has(n) ? mapCopy.get(n)! + 1 : 1),
          new Map(map)
        ),
      _map
    ),
  ]
    .flatMap(([k, v]) => (v === nums.length ? k : []))
    .sort((a, b) => a - b);
}
