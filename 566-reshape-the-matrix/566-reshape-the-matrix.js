/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  var matR = mat.length;
  var matC = mat[0].length;
  var matRC = matR * matC;
    
  var sameRC = matR == r && matC == c;
  var notConfigurable = matRC != r * c;
  if (notConfigurable || sameRC) return mat;

  var shapped = Array(r);
  for (let i = 0; i < shapped.length; i++) shapped[i] = Array(c);

  let row = 0;
  let col = 0;
  for (let i = 0; i < matR; i++) {
    for (let j = 0; j < matC; j++) {
      shapped[row][col] = mat[i][j];
      col++;
      if (col == c) {
        col = 0;
        row++;
      }
    }
  }

  return shapped;
};
