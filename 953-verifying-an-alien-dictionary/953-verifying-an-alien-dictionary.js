/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order, flag = true) {
  words = [...words];
  var orderTable = [...order].reduce(
    (orderTable, char, i) => orderTable.set(char, i),
    new Map()
  );

  while (words.length > 1) {
    let i = 0;
    let [word1, word2] = words;
    while (i < word1.length || i < word2.length) {
      let order1 = orderTable.get(word1[i]);
      let order2 = orderTable.get(word2[i]);
      if (order1 == null || order1 < order2) break;
      if (order2 == null || order1 > order2) {
        flag = false;
        break;
      }
      i++;
    }
    if (flag == false) break;
    words = words.slice(1);
  }
  return flag;
};
