/**
 * @param {string} s
 * @return {boolean}
 */


function isValid(s) {
  var parenthesesTable = {'(' : ')', '[' : ']', '{' : '}'};
  var stack = Stack();
  
 for(let char of s){
   if(parenthesesTable[char]){
     stack.push(char);
   }
   else{
     if(char != parenthesesTable[stack.top]) return false;
     stack.pop();
   }
 }
  return stack.isEmpty();
}

//****
function Stack(){
  var stack = Object.create(stackStore)
  stack.dataStore = [];
  return stack;
}

stackStore = {
  push(v){
    this.dataStore.push(v)
    return this;
  },
  get top(){
    var lastIdx = this.dataStore.length - 1;
    return this.dataStore[lastIdx]
  },
  pop(){
    var poped = this.top;
    this.dataStore.pop();
    return poped;
  },
  isEmpty(){
    return this.dataStore.length == 0;
  }
}


















// function isValid(s) {
//   if(s.length == 1 ) return false;
  
//   var parenthesesTable = {'(' : ')', '[' : ']', '{' : '}'};
  
//   {let i = 0
//     while(i < s.length){
//       let start = s[0];
//       let closing = s[i];
      
//       if(closing = parenthesesTable[start]){
//         s = s.slice(1, )
//       }
      
//     }
//   }
  
// };