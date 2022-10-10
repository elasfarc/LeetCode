function kthDistinct(arr: string[], k: number): string {
  return (
    Object.entries(
      arr.reduce<{ [k: string]: number | undefined }>(
        (map, str) => ({ ...map, [str]: (map[str] ?? 0) + 1 }),
        {}
      )
    ).filter(([str, occurance]) => occurance == 1)[k-1]?.[0] ?? ""
  );
}