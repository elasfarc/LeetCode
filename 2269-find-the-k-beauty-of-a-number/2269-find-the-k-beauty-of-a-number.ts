function divisorSubstrings(
  num: number,
  k: number,
  kBeauty: number = 0,
  index: number = 0
): number {
  const numAsString = String(num);

  return index > numAsString.length - k
    ? kBeauty
    : divisorSubstrings(
        num,
        k,
        num % +numAsString.slice(index, k + index) === 0
          ? kBeauty + 1
          : kBeauty,
        index + 1
      );
}