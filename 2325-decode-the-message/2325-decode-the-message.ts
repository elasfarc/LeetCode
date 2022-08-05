function decodeMessage(key: string, message: string): string {
  var alphaMap = getAlphaMap(key);
  return decode(alphaMap, message);
}

// **********************************
type AlphaMap = {
  [k: string]: number | undefined;
};

const A_CHAR_CODE = 97;
const Z_CHAR_CODE = 122;

function getAlphaMap(
  key: string,
  currentIndex = 0,
  currentCharCode = A_CHAR_CODE,
  decoder: AlphaMap = {}
): AlphaMap {
  var currentCharInKey = key[currentIndex];
  return currentCharCode > Z_CHAR_CODE
    ? decoder
    : getAlphaMap(
        key,
        currentIndex + 1,
        decoder[currentCharInKey] || currentCharInKey == " "
          ? currentCharCode
          : currentCharCode + 1,

        decoder[currentCharInKey] || currentCharInKey == " "
          ? decoder
          : {
              ...decoder,
              [currentCharInKey]: currentCharCode,
            }
      );
}

function decode(
  alphaMab: AlphaMap,
  msg: string,
  index = 0,
  decodedMsg = ""
): string {
  var currentCharInMsg = msg[index];
  return index >= msg.length
    ? decodedMsg
    : decode(
        alphaMab,
        msg,
        index + 1,
        `${decodedMsg}${
          currentCharInMsg == " "
            ? " "
            : String.fromCharCode(alphaMab[currentCharInMsg]!)
        }`
      );
}
