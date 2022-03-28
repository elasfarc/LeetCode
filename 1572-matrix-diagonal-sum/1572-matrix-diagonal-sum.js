/**
 * @param {number[][]} mat
 * @return {number}
 */
const isOdd = (n) => n % 2 != 0;
const getIntersectionRow = (matLength) => Math.floor(matLength / 2);

const isDiagIntersection = (matLength, index) =>
  isOdd(matLength) && getIntersectionRow(matLength) == index;

const diagonalSum = (mat) =>
  mat.reduce(
    (diagSum, arr, i) =>
      diagSum +
      arr[i] +
      (isDiagIntersection(mat.length, i) ? 0 : arr[mat.length - i - 1]),
    0
  );