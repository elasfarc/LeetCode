const findDifference = (nums1: number[], nums2: number[]): number[][] => [
  [...new Set(nums1)].filter((n) => !nums2.includes(n)),
  [...new Set(nums2)].filter((n) => !nums1.includes(n)),
];