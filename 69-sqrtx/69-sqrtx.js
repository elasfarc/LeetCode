/**
 * @param {number} x
 * @return {number}
 */

/*

   25 - 1 = 24 (1) 
   24 - 3 (2) 
   21 - 5 (3) 
   16 - 7 (4) 
   9  - 9 (5)
   0  - 11 (STOP) 
   
  No. of steps till X < 0 is 5 which is the square root 

*/

function mySqrt(x, counter = 0, subBy = 1) {
  return x - subBy < 0 
    ? counter 
    : mySqrt(x - subBy, counter + 1, subBy + 2);
}
