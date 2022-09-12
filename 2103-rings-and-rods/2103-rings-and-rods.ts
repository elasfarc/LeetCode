type Color = "R" | "G" | "B";
type RodTable = [number, number, number];
type RodsTable = {
  [rodLabel: string]: RodTable;
};

function countPoints(rings: string, pointer = 0, rods: RodsTable = {}): number {
  const colorsIndexes = { R: 0, G: 1, B: 2 } as const;
  const color = rings[pointer] as Color,
    label = rings[pointer + 1];
  const rodTable = rods[label] ?? [0, 0, 0];
  const updated = adjust(colorsIndexes[color], inc, rodTable) as RodTable;
  return pointer >= rings.length
    ? Object.values(rods).filter((rod) => rod.every(gt(0))).length
    : countPoints(rings, pointer + 2, { ...rods, [label]: updated });
}

//*********

function inc(value: number) {
  return value + 1;
}
function gt(y: number): (x: number) => boolean {
  return (x) => x > y;
}

function adjust<T>(index: number, fn: (arg: T) => T, list: readonly T[]): T[] {
  const updatedValue = fn(list[index]);
  return [...list.slice(0, index), updatedValue, ...list.slice(index + 1)];
}
