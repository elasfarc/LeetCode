type tubleToObj<T extends readonly any[]> = {
  [K in T[number]]: K;
};
const specialChar2 = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
] as const;

const specialCharTable: tubleToObj<typeof specialChar2> & { [k: string]: any } =
  specialChar2.reduce(
    (acc, char) => ({ ...acc, [char]: char }),
    {} as tubleToObj<typeof specialChar2>
  );

type Validation = {
  isLowerCase: boolean;
  isUpperCase: boolean;
  isDigit: boolean;
  isSpecialChar: boolean;
};

function strongPasswordCheckerII(password: string): boolean {
  const validation: Validation = {
    isLowerCase: false,
    isUpperCase: false,
    isDigit: false,
    isSpecialChar: false,
  };

  {
    let i = 0;
    while (i <= password.length) {
      let charCode: number = password.charCodeAt(i);
      let char = password[i];
      if (
        (i < password.length && char === password[i + 1]) ||
        password.length < 8
      )
        return false;
      if (!validation.isLowerCase && charCode >= 97 && charCode <= 122)
        validation.isLowerCase = true;
      if (!validation.isUpperCase && charCode >= 65 && charCode <= 90)
        validation.isUpperCase = true;
      if (!validation.isDigit && charCode >= 48 && charCode <= 57)
        validation.isDigit = true;
      if (specialCharTable[char]) validation.isSpecialChar = true;
      i++;
    }
    return Object.values(validation).every(Boolean);
  }
}
