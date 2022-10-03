function maxDistance(colors: number[], index = 0, currentMax = 0): number {
  const lastIdx = colors.length - 1;
  return index > lastIdx
    ? currentMax
    : maxDistance(
        colors,
        index + 1,
        colors[0] != colors[index] && colors[lastIdx] != colors[index]
          ? Math.max(currentMax, index, lastIdx - index)
          : colors[0] != colors[index]
          ? Math.max(currentMax, index)
          : colors[lastIdx] != colors[index]
          ? Math.max(currentMax, lastIdx - index)
          : currentMax
      );
}