export class Stack<T> {
  private array: T[] = [];

  pop(): T | undefined {
    if (this.isEmpty()) return;

    return this.array.pop();
  }

  push(data: T): void {
    this.array.push(data);
  }

  peek(): T {
    if (this.isEmpty()) console.log('empty');

    return this.array[this.array.length - 1];
  }

  isEmpty(): boolean {
    return this.array.length === 0;
  }
}
