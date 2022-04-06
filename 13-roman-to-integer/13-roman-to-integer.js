var romanToInt = function (s) {
  const numMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const subtractionCase = { I: ["V", "X"], X: ["L", "C"], C: ["D", "M"] };
  var num = 0;

  {
    let i = 0;
    while (i < s.length) {
      let char = s[i];
      if (subtractionCase[char] && subtractionCase[char].includes(s[i + 1])) {
        num += numMap[s[i + 1]] - numMap[char];
        i += 2;
      } else {
        num += numMap[char];
        i++;
      }
    }
  }

  return num;
};
