function minBitFlips(start: number, goal: number): number {
  return start === goal
    ? 0
    : [...(start ^ goal).toString(2)].filter((digit) => digit === "1").length;
}

