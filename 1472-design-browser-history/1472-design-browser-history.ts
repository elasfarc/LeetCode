type HistoryNode = {
  val: string;
  next: HistoryNode | null;
  prev: HistoryNode | null;
};

class BrowserHistory {
  current: HistoryNode;

  constructor(homepage: string) {
    this.current = { val: homepage, next: null, prev: null };
  }

  visit(url: string): void {
    const newNode = { val: url, prev: this.current, next: null };
    this.current.next = newNode;
    this.current = this.current.next;
  }

  back(steps: number): string {
    this.current = backFromCurrent(steps, this.current);
    return this.current.val;
    
    //** */
    function backFromCurrent(steps: number, current: HistoryNode): HistoryNode {
      return steps == 0 || current.prev == null
        ? current
        : backFromCurrent(steps - 1, current.prev);
    }
  }

  forward(steps: number): string {
    this.current = forwardFromCurrent(steps, this.current);
    return this.current.val;

    //** */
    function forwardFromCurrent(
      steps: number,
      current: HistoryNode
    ): HistoryNode {
      return steps == 0 || current.next == null
        ? current
        : forwardFromCurrent(steps - 1, current.next);
    }
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */