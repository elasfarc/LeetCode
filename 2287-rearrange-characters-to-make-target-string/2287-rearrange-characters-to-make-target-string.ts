type NumDic = { [k: string]: number | undefined };
type MapType = Record<"sMap" | "targetMap", NumDic>;

function rearrangeCharacters(
  s: string,
  target: string,
  Map: MapType = { sMap: {}, targetMap: {} },
  index: number = 0
): number {
  return target.length > s.length
    ? 0
    : index < s.length
    ? rearrangeCharacters(
        s,
        target,
        {
          sMap: {
            ...Map.sMap,
            [s[index]]: Map.sMap[s[index]] ? ++Map.sMap[s[index]]! : 1,
          },
          targetMap:
            index < target.length
              ? {
                  ...Map.targetMap,
                  [target[index]]: Map.targetMap[target[index]]
                    ? ++Map.targetMap[target[index]]!
                    : 1,
                }
              : { ...Map.targetMap },
        },
        ++index
      )
    : Math.min(
        ...Object.entries(Map.targetMap).map(([k, v]) =>
          Map.sMap[k] ? Math.floor(Map.sMap[k]! / v!) : 0
        )
      );
}





// type Dic = { [k: string]: number | undefined };

// const handleTable = (table: Dic, key: string): Dic => {
//   if (table[key]) table[key] = table[key]! + 1;
//   else table[key] = 1;
//   return table;
// };

// const rearrangeCharacters: (s: string, target: string) => number = (
//   s,
//   target
// ) => {
//   if (target.length > s.length) return 0;
//   const targetTable: Dic = {};
//   const sourceTable: Dic = {};

//   let i = 0;
//   while (i < s.length) {
//     const sChar = s[i],
//       tChar = target[i];
//     handleTable(sourceTable, sChar);
//     if (i < target.length) handleTable(targetTable, tChar);
//     i++;
//   }

//   return Math.min(
//     ...Object.entries(targetTable).map(([k, v]) =>
//       sourceTable[k] ? Math.floor(sourceTable[k]! / v!) : 0
//     )
//   );
// };
