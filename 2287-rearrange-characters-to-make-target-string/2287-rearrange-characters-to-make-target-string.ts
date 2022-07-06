/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */

type Dic = { [k: string]: number | undefined };

const handleTable = (table: Dic, key: string): Dic => {
  if (table[key]) table[key] = table[key]! + 1;
  else table[key] = 1;
  return table;
};

const rearrangeCharacters: (s: string, target: string) => number = (
  s,
  target
) => {
  if (target.length > s.length) return 0;
  const targetTable: Dic = {};
  const sourceTable: Dic = {};

  let i = 0;
  while (i < s.length) {
    const sChar = s[i],
      tChar = target[i];
    handleTable(sourceTable, sChar);
    if (i < target.length) handleTable(targetTable, tChar);
    i++;
  }

  return Math.min(
    ...Object.entries(targetTable).map(([k, v]) =>
      sourceTable[k] ? Math.floor(sourceTable[k]! / v!) : 0
    )
  );
};
