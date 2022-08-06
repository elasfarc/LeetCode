function checkXMatrix(grid: number[][], n = grid.length, index = 0): boolean {
  const row = grid[index];

  const mainDiagInRowIdx = index;
  const secDiagInRowIdx = n - 1 - index;

  const isGoodRow =
    index < grid.length &&
    row.every((ele, i) =>
      i == mainDiagInRowIdx || i == secDiagInRowIdx ? ele != 0 : ele == 0
    );

  return index >= grid.length
    ? true
    : isGoodRow
    ? checkXMatrix(grid, n, index + 1)
    : false;
}