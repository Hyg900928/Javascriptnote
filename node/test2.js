class PromisePool {
  constructor({ threads = 4, executor, tasks = [] }) {
    this.threads = threads;
    this.tasks = tasks;
    this.executor = executor;
    this.usingThreads = 0;
    this.execute();
  }

  addTasks(tasks = []) {
    this.tasks = this.tasks.concat(tasks);
    this.execute();
  }

  addTask(task) {
    console.log(task)
    this.addTasks([task]);
  }

  execute() {
    let freeThreads = this.threads - this.usingThreads;
    if (!freeThreads) return;

    while (freeThreads --) {
      const task = this.tasks.shift();
      if (task) {
        this.usingThreads += 1;
        this.executor(task).finally(() => {
          this.usingThreads -= 1;
          this.execute();
        });
      }
    }
  }
}
const pool = new PromisePool({
  executor: (task) => {
    return new Promise((resolve, reject) => {
      console.log('start executing ', task);
      setTimeout(() => {
        console.log(task);
        console.log('done executing ', task);
        resolve();
      }, Math.random() * 3000 + 1000);
    });
  },
  tasks: [1,2,3,4,5,6,7,8,9]
});

setTimeout(() => {
  pool.addTask(10);
}, 3000)
