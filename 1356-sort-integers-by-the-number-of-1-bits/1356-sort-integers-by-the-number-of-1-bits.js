/**
 * @param {number[]} arr
 * @return {number[]}
 */


var sortByBits = arr => {
  return arr.sort(orderByOnes)

  function orderByOnes(a, b) {
    let aOnes = getOnes(a)
    let bOnes = getOnes(b)
    return aOnes == bOnes ? a - b : aOnes - bOnes
  }
}

//****

function getOnes(n, count = 0) {
  return n == 0 ? count : getOnes(Math.floor(n / 2), count + (n % 2))
}
