
function cellsInRange(
  s: string,
  storage: string[] = [],
  startCol = s[0],
  endCol = s[3],
  startRow = +s[1] - 1,
  endRow = +s[4]
): string[] {
  return startCol > endCol
    ? storage
    : cellsInRange(
        s,
        [...storage, ...getAllColumnCells(startCol).slice(startRow, endRow)],
        String.fromCharCode(getCharCode(startCol) + 1),
        endCol,
        startRow,
        endRow
      );
}

function getAllColumnCells(col = "A"): string[] {
  return [
    `${col}1`,
    `${col}2`,
    `${col}3`,
    `${col}4`,
    `${col}5`,
    `${col}6`,
    `${col}7`,
    `${col}8`,
    `${col}9`,
  ];
}

function getCharCode(s: string): number {
  return s.charCodeAt(0);
}
