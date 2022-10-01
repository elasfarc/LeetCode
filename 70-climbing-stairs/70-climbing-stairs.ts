const memo: Map<number, number> = new Map();

function climbStairs(n: number): number {
  if (n == 0 || n == 1) return 1;
  if (memo.has(n)) return memo.get(n)!;

  const result = climbStairs(n - 1) + climbStairs(n - 2);
  memo.set(n, result);
  return result;
}