function makeFancyString(s: string): string {
  if(s.length < 3 ) return s
  let p1 = s[0],
    p2 = s[1],
    p3;
  let fancyS = p1 + p2;

  for (let i = 2; i < s.length; i++) {
    p3 = s[i];
    if (!(p1 == p2 && p1 == p3)) {
      p1 = p2;
      p2 = p3;
      fancyS += p3;
    }
  }

  return fancyS;
}