type CharsCheck = {
  [k: string]: { capital?: boolean; small?: boolean } | undefined;
};

type strMap = {
  chars: CharsCheck;
  greatestLetter: string;
};

const initStrMap: strMap = {
  chars: {},
  greatestLetter: "",
};

function greatestLetter(s: string, index = 0, strMap = initStrMap): string {
  if (index >= s.length) return strMap.greatestLetter;
  var isCap = isCapital(s[index]);
  var char = isCap ? s[index] : fromSmlToCap(s[index]);
  var updatedCharsCheck: CharsCheck = {
    ...strMap.chars,
    [char]: { ...strMap.chars[char], [isCap ? "capital" : "small"]: true },
  };
  var isCapSmallChecked =
    updatedCharsCheck[char]!.capital && updatedCharsCheck[char]!.small;
  return greatestLetter(s, index + 1, {
    chars: updatedCharsCheck,
    greatestLetter: isCapSmallChecked
      ? strMap.greatestLetter == "" ||
        getCharCode(char) > getCharCode(strMap.greatestLetter)
        ? char
        : strMap.greatestLetter
      : strMap.greatestLetter,
  });
}

const CAP_A_CODE = 65,
  CAP_Z_CODE = 90;

function isCapital(char: string): boolean {
  const charCode = getCharCode(char);
  return charCode >= CAP_A_CODE && charCode <= CAP_Z_CODE;
}

function fromSmlToCap(char: string): string {
  const charCode = getCharCode(char);
  return isCapital(char) ? char : String.fromCharCode(charCode - 32);
}

function getCharCode(char: string): number {
  return char.charCodeAt(0);
}