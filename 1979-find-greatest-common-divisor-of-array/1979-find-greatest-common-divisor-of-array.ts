function findGCD(nums: number[]): number {
  let max = -Infinity, min = Infinity;
  
  for(let num of nums){
    if(num > max) max = num
    if(num < min) min = num
  }
  
  for(let GCD = min; GCD > 0; GCD--)
    if(min % GCD == 0 && max % GCD == 0) return GCD
    
};