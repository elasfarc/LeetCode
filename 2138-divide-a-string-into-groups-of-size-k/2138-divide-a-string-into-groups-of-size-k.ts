function divideString(
  s: string,
  k: number,
  fill: string,
  Groups: string[] = []
): string[] {
  return s.length === 0
    ? Groups
    : divideString(s.slice(k), k, fill, [
        ...Groups,
        s.length < k ? s.padEnd(k, fill) : s.slice(0, k),
      ]);
}
