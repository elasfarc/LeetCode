type ByParityFlag = { odd: string[]; even: string[] };

const getByParityFlag = _compose2<
  [keyof ByParityFlag],
  keyof ByParityFlag,
  (arg: ByParityFlag) => ByParityFlag[keyof ByParityFlag]
>(prop, identity);

////************** largestInteger **************/

const largestInteger: (num: number) => number = (num) =>
  _compose4(
    constructLargestInt(num.toString()),
    _converge<
      ByParityFlag,
      ByParityFlag[keyof ByParityFlag],
      ByParityFlag[keyof ByParityFlag],
      ByParityFlag
    >(
      (sortedOdd, sortedEven) => ({ odd: sortedOdd, even: sortedEven }),
      _compose2(sortDEC, getByParityFlag("odd")),
      _compose2(sortDEC, getByParityFlag("even"))
    ),
    sortByParity,
    toString
  )(num);

////************** Helpers **************/

function toString(n: number): string {
  return n.toString();
}
////************** _ **************/
function sortByParity(num: string): ByParityFlag {
  return [...num].reduce<ByParityFlag>(
    (acc, digit) => ({
      ...acc,
      [isOdd(+digit) ? "odd" : "even"]: [
        ...acc[isOdd(+digit) ? "odd" : "even"],
        digit,
      ],
    }),
    { odd: [], even: [] }
  );
}
////************** _ **************/
function sortDEC(nums: string[]): string[] {
  return [...nums].sort((a, b) => +b - +a);
}
////************** _ **************/
function constructLargestInt(
  num: string,
  index = 0
): (arg: ByParityFlag) => number {
  return ({ odd: [firstOdd, ...restOdd], even: [firstEven, ...restEven] }) =>
    index >= num.length
      ? +num
      : constructLargestInt(
          `${num.slice(0, index)}${
            isOdd(+num[index]) ? firstOdd : firstEven
          }${num.slice(index + 1)}`,
          index + 1
        )({
          odd: isOdd(+num[index]) ? restOdd : [firstOdd, ...restOdd],
          even: isOdd(+num[index]) ? [firstEven, ...restEven] : restEven,
        });
}
////************** _ **************/
function isOdd(num: number): boolean {
  return num % 2 == 1;
}

////************** UTILS **************/

function prop<T, K extends keyof T>(key: K): (obj: T) => T[K] {
  return (obj) => obj[key];
}

function identity<T>(arg: T): T {
  return arg;
}
function _converge<R, F1R, F2R, InitV>(
  after: (arg0: F1R, arg1: F2R) => R,
  f1: (arg: InitV) => F1R,
  f2: (arg: InitV) => F2R
): (init: InitV) => R {
  return (init) => after(f1(init), f2(init));
}

function _compose4<TArgs extends any[], R1, R2, R3, R4>(
  f4: (arg: R3) => R4,
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...initV: TArgs) => R1
): (...initv: TArgs) => R4 {
  return (...initV) => f4(f3(f2(f1(...initV))));
}

function _compose2<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...initV: TArgs) => R1
): (...initv: TArgs) => R2 {
  return (...initV) => f2(f1(...initV));
}
