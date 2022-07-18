function digitSum(s: string, k: number): string {
  return s.length <= k
    ? s
    : digitSum(
        _compose(
            concatIntoStr,
            _map(addDigits),
            divideIntoLengthesOfK(k)
        )(s),
        k
      );
}

//************************ */

function divideIntoLengthesOfK(
  k: number,
  index: number = 0,
  storage: string[] = []
): (s: string) => string[] {
  return (s) => {
    return s.length == 0
      ? storage
      : divideIntoLengthesOfK(k, index + 1, [...storage, s.slice(0, k)])(
          s.slice(k)
        );
  };
}

function addDigits(value: string): number {
  return [...value].reduce((sum, n) => sum + Number(n), 0);
}

function concatIntoStr(arr: any[]): string {
  return String.prototype.concat(...arr);
}


function _map<T, U>(
  mapper: (value: T, index: number, list: T[]) => U
): (list: T[]) => U[] {
  return (list) => {
    const storage: U[] = [];
    for (let i = 0; i < list.length; i++)
      storage.push(mapper(list[i], i, list));
    return storage;
  };
}

function _compose<TArgs extends any[], R1, R2, R3>(
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R3 {
  return function composed(...initV) {
    return f3(f2(f1(...initV)));
  };
}

