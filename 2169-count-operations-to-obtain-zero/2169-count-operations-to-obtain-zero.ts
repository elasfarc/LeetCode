function countOperations(num1: number, num2: number, operations = 0): number {
  return eqls(0)(num1) || eqls(0)(num2)
    ? operations
    : countOperations(
        unless(lessThan(num2), sub(num2))(num1),
        unless(lessThan(num1), sub(num1))(num2),
        inc(operations)
      );
}


//************* *************************************/
function eqls(y: any): (x: number) => boolean {
  return (x) => Object.is(x, y);
}

function lessThan(y: number): (x: number) => boolean {
  return (x) => x < y;
}
function sub(y: number): (x: number) => number {
  return (x) => x - y;
}

function inc(n: number): number {
  return n + 1;
}

function unless<T>(
  pred: (arg: T) => boolean,
  onFalse: (arg: T) => T
): (v: T) => T {
  return (v) => (pred(v) ? v : onFalse(v));
}
