type Item = [number, number];

function mergeSimilarItems(items1: Item[], items2: Item[]): Item[] {
  let itemsMap = [...items1, ...items2].reduce<Map<number, number>>(
    (acc, [v, w]) => (acc.has(v) ? acc.set(v, acc.get(v)! + w) : acc.set(v, w)),
    new Map()
  );
  return [...itemsMap.entries()].sort(([v1], [v2]) => v1 - v2);
}