function sortPeople(names: string[], heights: number[]): string[] {
  const table = heights.reduce<{ [h: string]: string }>(
    (table, height, i) => ({ ...table, [height]: names[i] }),
    {}
  );
  return heights.sort(DESC).map((h) => table[h]);
}

function DESC<T>(a: T, b: T) {
  return a > b ? -1 : 1;
}