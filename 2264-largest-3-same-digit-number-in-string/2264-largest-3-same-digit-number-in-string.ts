const GOOD_INT_LENGTH = 3;

function largestGoodInteger(num: string, LGI: string = ""): string {
  const possibleGoodInt = num.slice(0, GOOD_INT_LENGTH);
  return num.length === 0
    ? LGI
    : largestGoodInteger(
        num.slice(1),
        LGI == "" &&
          isGoodInt(possibleGoodInt) &&
          isLeadingZero(possibleGoodInt)
          ? possibleGoodInt
          : isGoodInt(possibleGoodInt) && +possibleGoodInt > +LGI
          ? possibleGoodInt
          : LGI
      );
}

function isGoodInt(n: string): boolean {
  return n.length === GOOD_INT_LENGTH && n[0] == n[1] && n[1] == n[2];
}
function isLeadingZero(v: string): boolean {
  return +v === 0;
}