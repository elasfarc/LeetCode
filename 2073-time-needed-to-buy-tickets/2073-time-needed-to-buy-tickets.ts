
function timeRequiredToBuy(tickets: number[], k: number): number {
  let reqTime = 0;

  for (let i = 0; i < tickets.length; i++) {
    if(tickets[i] < tickets[k]) reqTime += tickets[i]
    else if(i <= k) reqTime += tickets[k] 
    else reqTime += tickets[k] - 1
  }

  return reqTime;
}