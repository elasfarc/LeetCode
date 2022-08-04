function fillCups(amount: number[], minNoOfSeconds = 0): number {
  const [max, mid, min] = [...amount].sort(sortDSC);
  const maxFillsInOneStep =
    min == 0 && mid == 0 ? max : mid - min > 0 ? mid - min : 1;
  return [max, mid, min].every(eqls(0))
    ? minNoOfSeconds
    : fillCups(
        mid == 0 && min == 0
          ? [0, 0, 0]
          : [...[max, mid].map(sub(maxFillsInOneStep)), min],
        minNoOfSeconds + maxFillsInOneStep
      );
}

function sortDSC(a: number, b: number): number {
  return b - a;
}

function eqls<T>(y: T): (x: T) => boolean {
  return (x) => x === y;
}

function sub(y: number): (x: number) => number {
  return (x) => x - y;
}