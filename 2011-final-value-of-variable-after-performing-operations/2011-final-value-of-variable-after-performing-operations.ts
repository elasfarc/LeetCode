function finalValueAfterOperations(operations: string[]): number {
  let ans: number = 0;
  for (let operation of operations)
    ans = operation[0] == "+" || operation[1] == "+" ? ans + 1 : ans - 1;

  return ans;
}