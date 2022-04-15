/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  var sum = ''

  let [n1, n2] = Math.max(a.length, b.length) == a.length ? [a, b] : [b, a]
  n2 = n2.padStart(n1.length, 0)
  let carryOver = 0
  let i = n1.length - 1

  while (i >= 0) {
    if (
      n1[i] & (n2[i] == 1) ||
      n1[i] & (carryOver == 1) ||
      n2[i] & (carryOver == 1)
    ) {
      sum = String(n1[i] & n2[i] & carryOver).concat(sum)
      carryOver = 1
    } else {
      sum = String(n1[i] | n2[i] | carryOver).concat(sum)
      carryOver = 0
    }

    i--

    if (i < 0 && carryOver) sum = '1'.concat(sum)
  }
  return sum
}
