function fib(n: number): number {
  if (n == 0) return 0;
  if (n == 1) return 1;

  let a = 1,
    b = 1;
  let nextNum = 0;

  for (let i = 1; i < n; i++) {
    nextNum = a + b;
    a = b;
    b = nextNum;
  }

  return a;
}




/*       
  *******************RECURSIVE******************
  const memo: Map<number, number> = new Map();

  function fib(n: number): number {
    if (memo.has(n)) return memo.get(n)!;
    if (n == 1 || n == 2) return 1;
    const result = fib(n - 1) + fib(n - 2);
    memo.set(n, result);
    return result;
  }
*/