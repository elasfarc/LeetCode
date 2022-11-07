function canBeTypedWords(text: string, brokenLetters: string): number {
  const brokenLettersMap:Map<string, boolean> = new Map();
  for(let char of brokenLetters) brokenLettersMap.set(char, true)
  
  let fullyTypedWords = 0;
  let flag = true;
  for(let i = 0; i < text.length; i++){
    let char = text[i];
    
    if(char == ' '){
      if(flag) fullyTypedWords+=1
      flag = true;
      continue;
    }


    if(flag && brokenLettersMap.has(char)) flag = false;
    if(flag && i == text.length - 1)  fullyTypedWords+=1
  }
  
  
  return fullyTypedWords
};