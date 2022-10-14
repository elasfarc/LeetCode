type NumMap = {
  [list: string]: Map<number, boolean>;
};

function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[]
): number[] {
  const map: NumMap = { "1": new Map(), "2": new Map(), "3": new Map() },
    distinctElements: Set<number> = new Set();
  for (let i = 0; i < Math.max(nums1.length, nums2.length, nums3.length); i++) {
    [nums1[i], nums2[i], nums3[i]].forEach(
      (ele, i) =>
        ele &&
        map[i + 1].set(ele, true) &&
        !distinctElements.has(ele) &&
        isEleInTwoOutOfThree(map, ele) &&
        distinctElements.add(ele)
    );
  }
  return [...distinctElements];
}

function isEleInTwoOutOfThree(map: NumMap, ele: number): boolean {
  const { "1": map1, "2": map2, "3": map3 } = map;
  return (
    (map1.has(ele) && map2.has(ele)) ||
    (map1.has(ele) && map3.has(ele)) ||
    (map2.has(ele) && map3.has(ele))
  );
}