const fns = {
  "+": addLastTwo,
  C: invalidatePrev,
  D: double,
};

function calPoints(operations: string[], scores: number[] = [], i = 0): number {
  const operation = operations[i];

  return i >= operations.length
    ? sum(scores)
    : calPoints(
        operations,
        operation == "+" || operation == "D" || operation == "C"
          ? fns[operation](scores)
          : [...scores, +operation],
        i + 1
      );
}

//*********** */

function invalidatePrev(record: readonly number[]): number[] {
  return record.slice(0, record.length - 1);
}

function addLastTwo(record: readonly number[]): number[] {
  const lastTwoScoresSum =
    record[record.length - 2] + record[record.length - 1];
  return [...record, lastTwoScoresSum];
}

function double(record: readonly number[]): number[] {
  const lastScore = record[record.length - 1];
  return [...record, lastScore * 2];
}

function sum(list: readonly number[]) {
  return list.reduce((sum, n) => sum + n, 0);
}
