function calculateTax(
  brackets: number[][],
  income: number,
  index = 0,
  taxes = 0
): number {
  const [upper, percentage] = brackets[index] ?? [0, 0];
  const [prevUpper] = brackets[index - 1] ?? [0];
  var amountToDetucted =
    income - (upper - prevUpper) > 0 ? upper - prevUpper : income;
  return income <= 0
    ? taxes
    : calculateTax(
        brackets,
        income - amountToDetucted,
        index + 1,
        taxes + amountToDetucted * (percentage / 100)
      );
}
