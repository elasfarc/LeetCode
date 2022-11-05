function getLucky(s: string, k: number): number {
  let luckyNum = [...s].map(getCharOrder).join('')

  for(let i = 0; i < k ; i++){
   luckyNum = String([...luckyNum].reduce(sum, 0))
  }
  return +luckyNum
};

//**************


function getCharOrder(char: string):number{
  const BASE_ASCII_ORDER = 96
  return char.charCodeAt(0) - BASE_ASCII_ORDER
}


function sum(total:number, ele:string){
  return total + +ele
}

