function countTriples(n: number): number {
  let tripleCounter = 0;
  
  for(let i = 1; i <= n; i++)
    for(let j = 1; j <= n; j++)
      for(let k = 1; k <= n; k++)
        square(i) + square(j) == square(k) ? ++tripleCounter : null
  return tripleCounter
};

//*******************
  
function square(n:number){
  return Math.pow(n, 2)
}