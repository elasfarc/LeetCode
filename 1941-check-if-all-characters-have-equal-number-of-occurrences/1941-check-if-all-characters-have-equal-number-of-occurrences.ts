function areOccurrencesEqual(s: string): boolean {
  const sMap: Map<string, number> = new Map();

  for (let char of s) sMap.set(char, (sMap.get(char) ?? 0) + 1);

  let everyCharOcc = sMap.get(s[0]);

  for (let charOcc of sMap.values()) if (charOcc != everyCharOcc) return false;

  return true;
}