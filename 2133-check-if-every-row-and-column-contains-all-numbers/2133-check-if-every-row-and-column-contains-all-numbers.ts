type CheckedTable = {
  [ele: string]: "checked" | undefined;
};

function checkValid(matrix: readonly number[][], index = 0): boolean {
  const row = matrix[index];
  const col = matrix.map((row) => row[index]);
  return index >= matrix.length
    ? true
    : areUniqueElements(row) && areUniqueElements(col)
    ? checkValid(matrix, index + 1)
    : false;
}

function areUniqueElements(
  list: readonly number[],
  table: CheckedTable = {}
): boolean {
  return list.every((element) =>
    table[element] == "checked" ? false : ((table[element] = "checked"), true)
  );
}