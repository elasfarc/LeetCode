/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = (accounts) => 
  accounts.reduce(
    (richest, account) => (
      (account = account.reduce((sum, ele) => sum + ele)),
      account > richest ? account : richest
    ),
    -Infinity
  );
