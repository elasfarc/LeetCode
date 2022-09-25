class MyLinkedList {
  nodes: readonly ListNode[] = [];

  get(index: number): number {
    return this._isValidIndex(index) ? this.nodes[index].val : -1
  }

  addAtHead(val: number): void {
    const currentNodes = this.nodes;
    const newNode = this._createNode(val);
    newNode.next = this.head ?? null;
    this.nodes = [newNode, ...currentNodes];
  }

  addAtTail(val: number): void {
    const currentNodes = this.nodes;
    const newNode = this._createNode(val);
    this.nodes = [...currentNodes, newNode];
  }

  addAtIndex(index: number, val: number): void {
    const currentNodes = this.nodes;
    const currentLength = currentNodes.length;
    const newNode = this._createNode(val);
    newNode.next = currentNodes[index];
    if (index == currentLength) return this.addAtTail(val);
    this.nodes = this._isValidIndex(index)
      ? [...currentNodes.slice(0, index), newNode, ...currentNodes.slice(index)]
      : currentNodes;
  }

  deleteAtIndex(index: number): void {
    const currentNodes = this.nodes;
    if (this._isValidIndex(index)) {
      this.nodes = [
        ...currentNodes.slice(0, index),
        ...currentNodes.slice(index + 1),
      ];
    }
  }

  _createNode(val: number): ListNode {
    return { val, next: null };
  }

  _isValidIndex(index: number) {
    const currentLength = this.nodes.length;
    return index < currentLength;
  }

  get head(): ListNode | undefined {
    return this.nodes[0];
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
