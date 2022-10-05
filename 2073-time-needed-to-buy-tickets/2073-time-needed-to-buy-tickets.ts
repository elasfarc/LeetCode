function timeRequiredToBuy(tickets: number[], k: number): number {
  let reqTime = 0;

  for (let i = 0; i < tickets.length; i++) {
    if (i > k)
      reqTime += tickets[i] >= tickets[k] ? tickets[k] - 1 : tickets[i];
    else reqTime += tickets[i] >= tickets[k] ? tickets[k] : tickets[i];
  }

  return reqTime;
}