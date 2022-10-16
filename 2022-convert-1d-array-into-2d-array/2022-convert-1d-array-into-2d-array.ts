function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  if (m * n != original.length) return [];
  const _2D: number[][] = [];

  let row = 0;
  let i = 0;
  while (row < m) {
    _2D[row] = [];
    for (let j = 0; j < n; j++) {
      _2D[row][j] = original[i];
      i++;
    }
    row++;
  }
  return _2D;
}
