/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x, rootSquare = 0, oddSubCount = 1){
  return x - oddSubCount < 0 
    ? rootSquare
    : mySqrt(x-oddSubCount, rootSquare+1, oddSubCount+2)
}