class MyStack {
  q1 = new MyQueue<number>();
  q2 = new MyQueue<number>();

  push(x: number): void {
    const q1 = this.q1,
      q2 = this.q2;

    q2.push(x);
    while (!q1.isEmpty()) q2.push(q1.pop()!);
    while (!q2.isEmpty()) q1.push(q2.pop()!);
  }

  pop(): number | null {
    const deleted = this.q1.peek();
    this.q1.pop();
    return deleted;
  }

  top(): number | null {
    return this.q1.peek();
  }

  empty(): boolean {
    return this.q1.isEmpty();
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

type QueueNode<T> = {
  val: T;
  next: QueueNode<T> | null;
  prev: QueueNode<T> | null;
};

class MyQueue<T> {
  head: QueueNode<T> | null = null;
  tail: QueueNode<T> | null = null;
  size: number = 0;

  push(val: T): void {
    const isHead = Boolean(this.head);
    const newItem: QueueNode<T> = { val, prev: this.tail, next: null };

    if (!this.head) this.head = newItem;
    this.tail = this.tail ? ((this.tail.next = newItem), newItem) : newItem;
    this.size += 1;
  }

  pop(): T | null {
    const deleted = this.peek();
    const newHead = this.head?.next ?? null;
    newHead && (newHead.prev = null);
    this.head = newHead;
    this.size -= 1;
    return deleted;
  }

  peek(): T | null {
    return this.head?.val ?? null;
  }

  isEmpty(): boolean {
    return Boolean(this.head == null);
  }
}