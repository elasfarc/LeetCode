function areNumbersAscending(s: string): boolean {
  return s
    .split(" ")
    .filter((token) => !isNaN(+token))
    .every((digit, i, list) => (i == 0 ? true : +digit > +list[i - 1]));
}