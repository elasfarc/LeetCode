
// /**
//  * @param {number} x
//  * @return {boolean}
//  */

function isPalindrome(x) {
  if(x < 0 || (x % 10 == 0 && x != 0)) return false;
  var reverted = 0;
  while (x > reverted){
    reverted = reverted * 10  + (x % 10);
    x = divideToInt(10)(x);
  }

  return reverted == x || divideToInt(10)(reverted) == x;
}


// //***


function divideToInt(y) {
  return function (x) {
    return Math.floor(x / y);
  };
}


