function sortPeople(names: string[], heights: number[]): string[] {
  return names
    .reduce<[string, number][]>(
      (table, name, i) => [...table, [name, heights[i]]],
      []
    )
    .sort(([n1, h1], [n2, h2]) => h2 - h1)
    .map(([name, height]) => name);
}