function kthDistinct(arr: string[], k: number): string {
  let distinct = 0;
  const map = arr.reduce<{ [k: string]: number | undefined }>(
    (map, str) => ({ ...map, [str]: (map[str] ?? 0) + 1 }),
    {}
  );
  for (let [str, occurance] of Object.entries(map)) {
    if (occurance == 1) distinct++;
    if (distinct == k) return str;
  }
  return "";
}