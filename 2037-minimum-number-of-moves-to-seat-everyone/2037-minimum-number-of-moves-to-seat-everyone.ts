function minMovesToSeat(seats: number[], students: number[]): number {
  let moves = 0
  seats.sort(DESC)
  students.sort(DESC)
  for(let i=0; i<students.length; i++)
    moves+= Math.abs(seats[i] - students[i])
  return moves
};

function DESC(a:number, b:number){
  return b -a 
}