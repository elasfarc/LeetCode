
const getCharCode = (index: number) => (str: string) => str.charCodeAt(index);
const toLower = (char: string) => char.toLowerCase();
const split = (speatator: string) => (list: string) => list.split(speatator);

const gte = (y: number) => (x: number) => x >= y;
const lte = (y: number) => (x: number) => x <= y;

const inc = (num: number) => num + 1;
const dec = (num: number) => num - 1;

const either: EitherBoth = (f, g) => (...args) => f(...args) || g(...args);
const both: EitherBoth = (f, g) => (...args) => f(...args) && g(...args);

//************* */

const isSmallLetter = compose(both(gte(97), lte(122)), getCharCode(0));
const isCapital = compose(both(gte(65), lte(90)), getCharCode(0));
const isNumChar = compose( both(gte(48), lte(57)), getCharCode(0))
const isValidChar = either(
  isNumChar,
  either(isSmallLetter, isCapital)
)


const getValidChars:FnFirstArg<typeof reduce<string,string>> = (revisedStr, char) =>
  isValidChar(char) ? revisedStr + toLower(char) : revisedStr;

const _isPalindrome = (str:string, left = 0, right = str.length - 1):boolean => {
  return left >= right
    ? true
    : str[left] == str[right]
    ? _isPalindrome(str, inc(left), dec(right))
    : false;
};

//************* */

const isPalindrome = compose(
  _isPalindrome,
  reduce(getValidChars, ""),
  split("")
);


//*********UTILS************** */

function reduce<T, U>(
  reducer: (acc: U, current: T, index: number, list: T[]) => U,
  initAcc: U
): (list: T[]) => U {
  return (list) => {
    let acc = initAcc;
    for (let i = 0; i < list.length; i++) acc = reducer(acc, list[i], i, list);
    return acc;
  };
}

function compose<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R2;

function compose<TArgs extends any[], R1, R2, R3>(
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R3;

function compose<TArgs extends any[]>(...fns: TArgs) {
  return (...init: TArgs) => fns.reduceRight((ans, fn) => fn(ans), init[0]);
}

//*********TYPES************** */

type Predicate<TArgs extends any[]> = (...args: TArgs) => boolean;
type EitherBoth = <TArgs extends any[]>(
  f: Predicate<TArgs>,
  g: Predicate<TArgs>
) => (...args: TArgs) => boolean;
type FnFirstArg<FN extends (...args: any[]) => any> = FN extends (
  arg0: infer FirstArg,
  ...rest: any[]
) => any
  ? FirstArg
  : never;







console.log(isPalindrome('0P'))
