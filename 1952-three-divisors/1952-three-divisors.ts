function isThree(n: number): boolean {
  let i = n - 1;
  let divisors = new Set([1, n])
  
  while (i > 1) {
    if (n % i == 0) {
      divisors.add(i).add(n / i)
      if(divisors.size > 3 ) return false
    }

    if (i % 2 == 0 && n % 2 == 0) i -= 2;
    else i -= 1;
  }
  return divisors.size == 3;
}