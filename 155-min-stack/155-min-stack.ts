class MinStack {
  stack: {val: number, prevMin:number}[] = [];
  min = Infinity;


  push(val: number): void {
    this.stack.push({val, prevMin: this.min });
    this.min = this.min < val ? this.min : val 
  }

  pop(): void {
    this.min =  this.stack[this.stack.length - 1].prevMin
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.min
  }
}