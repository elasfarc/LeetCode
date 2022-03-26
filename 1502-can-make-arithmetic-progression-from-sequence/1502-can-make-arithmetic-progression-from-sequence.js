/**
 * @param {number[]} arr
 * @return {boolean}
 */
const orderASC = (a,b) => a - b;

function canMakeArithmeticProgression(arr){
    arr = [...arr].sort(orderASC);
    var [a, b] = arr;
    var step = a - b;
    return arr.length == 2 
      ? true
      : ( function f(list, step){
        var [a, b] = list;
        return list.length < 2
            ? true
            : a - b == step
            ? f(list.slice(1), step)
            : false
    })(arr.slice(1), step)
}