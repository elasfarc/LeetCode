

var MyQueue = function() {
    this.s1 = Stack();
    this.s2 = Stack();
    this.front = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
   var s1 = this.s1;
   var s2 = this.s2;
    
    if(s1.isEmpty()) this.front = x;
    
    while(!s1.isEmpty())
        s2.push(s1.pop())
    
    s2.push(x);
    
    while(!s2.isEmpty())
        s1.push(s2.pop())
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    var deleted = this.s1.pop();
    this.front = this.s1.peek();
    return deleted;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.front;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.isEmpty();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

//****
function Stack() {
  var s = Object.create(stackStore);
  s.dataStore = [];
  return s;
}

const stackStore = {
  push(v) {
    this.dataStore = [v, ...this.dataStore];
  },
  peek() {
    return this.dataStore[0];
  },
  pop() {
    var [top, ...rest] = this.dataStore;
    this.dataStore = rest;
    return top;
  },
  size() {
    return this.dataStore.length;
  },
  isEmpty() {
    return this.dataStore.length == 0;
  },
};
