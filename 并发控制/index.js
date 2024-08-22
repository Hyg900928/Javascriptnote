class PLimit {
  constructor(concurrency) {
    // 最大并发数
    this.concurrency = concurrency;

    // 当前请求的数数量
    this.activeCount = 0;

    // 请求队列
    this.queue = [];

    return (fn, ...args) => {
      return new Promise(resolve => {
        this.enqueue(fn, resolve, args);
      });
    }
  }

  enqueue(fn, resolve, args) {
    this.queue.push(this.run.bind(this, fn, resolve, args));

    (async () => {
      await Promise.resolve();
      if (this.activeCount < this.concurrency && this.queue.length > 0) {
        this.queue.shift()();
      }
    })();
  }

  async run(fn, resolve, args) {
    this.activeCount++;

    const result = (async () => fn(...args))();

    resolve(result);

    try {
      await result;
    } catch {
    }

    this.next();
  }

  next() {
    this.activeCount--;

    if (this.queue.length > 0) {
      this.queue.shift()();
    }
  }
}
