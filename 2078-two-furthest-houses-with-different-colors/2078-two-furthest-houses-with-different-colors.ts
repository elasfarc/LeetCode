function maxDistance(colors: number[], index = 0, currentMax = 0): number {
  const lastIdx = colors.length - 1;
  const isCurrColorNotEqlMostLeft = colors[0] != colors[index];
  const isCurrColorNotEqlMostRight = colors[lastIdx] != colors[index];
  return index > lastIdx
    ? currentMax
    : maxDistance(
        colors,
        index + 1,
        isCurrColorNotEqlMostLeft && isCurrColorNotEqlMostRight
          ? Math.max(currentMax, index, lastIdx - index)
          : isCurrColorNotEqlMostLeft
          ? Math.max(currentMax, index)
          : isCurrColorNotEqlMostRight
          ? Math.max(currentMax, lastIdx - index)
          : currentMax
      );
}