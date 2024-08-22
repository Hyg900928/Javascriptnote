const { maxBy } = require('lodash');
const { guid } = require('./utils')

let instance = null;

class PromisePool {
  /**
   * 构造函数
   * @param {Number} maxCount
   */
  constructor(maxCount) {
    // promise pending线程池
    this.pausePool = [];

    // promise working线程池
    this.workingPool = [];

    // 最大working线程池数量
    this.maxCount = maxCount || 1;

    // 校验
    this.validateType(this.maxCount, "Max pool length", Number());

    this.cleanPausePool = this.cleanPausePool.bind(this);
    this.remove = this.remove.bind(this);
    this.removeAll = this.removeAll.bind(this);
    // if(!PromisePool.instance) {
    //   PromisePool.instance = this;
    // }
    // return PromisePool.instance;
  }

  /**
   * 在线程池中，装载Promise运行函数
   *
   * @example 使用案例：
   * main.js:
   *  // 初始化线程池最大工作量为5
   *  window.promisePool = initPromisePool(5);
   *
   * working.js:
   *  // 给promise包一层函数，返回需要执行的promsie
   *  const promiseProducer = function() {
   *    // your promise
   *    return new Promise((resolve) => {
   *      setTimeout(() => {
   *        resolve('test')
   *      }, 1000);
   *    });
   *  }
   *
   *  // 装载promise进入线程池
   *  const response = await promisePool.loadPromiseProducer(promiseProducer);
   *
   *  // 线程池执行结束，返回结果
   *
   * @public
   * @param {Function} promiseProducer 必须是一个返回promise的函数
   * @returns {Promise} result
   */
  loadPromiseProducer(producer, id) {
    // 校验
    // producer: {fn, prority: 1}或fn
    let { promiseProducer, priority = 1 } = producer;
    promiseProducer = promiseProducer || producer;

    // 校验
    this.validateType(promiseProducer, "Promise producer", Function());

    return new Promise((resolve, reject) => {
      const newId = id || guid();

      // pending线程池存入 promise运行函数 和 resolve函数
      this.pausePool.push({
        priority,
        promiseProducer,
        resolve,
        reject,
        id: newId
      });

      // 处理promise运行函数
      this.processPromise();
    });
  }

  cleanPausePool() {
    this.pausePool = [];
  }

  remove(reducer) {
    let index = this.workingPool.findIndex(r => r.id === reducer.id);

    if (index !== -1) {
      this.workingPool.splice(index, 1);
    } else {
      index = this.pausePool.findIndex(r => r.id === reducer.id);
      if (index !== -1) {
        this.pausePool.splice(index, 1);
      }
    }

    // 处理promise运行函数
    this.processPromise();
  }

  removeAll() {
    const pools = this.pausePool.concat(this.workingPool);
    const ids = pools.map(r => r.id);

    ids.forEach(id => {
      const r = pools.find(r => r.id == id);
      r && this.remove(r);
    });
  }

  /**
   * 处理promise运行函数
   */
  async processPromise() {
    const doNext = workingPromise => {
      // 销毁执行完的promise
      const index = this.workingPool.findIndex(r => r.id === workingPromise.id);
      if (index !== -1) {
        this.workingPool.splice(index, 1);
      }

      // 递归剩下的处理promise运行函数
      if (!this.pausePool.length) {
        return;
      }

      this.processPromise();
    };

    // 如果working线程池有空闲
    if (this.workingPool.length < this.maxCount) {
      // 从pending线程池中获取任务
      // const workingPromise = this.pausePool.shift();
      const workingPromise = maxBy(this.pausePool, "priority");

      // 如果存在任务
      if (workingPromise) {
        const index = this.pausePool.findIndex(m => m.id === workingPromise.id);
        if (index !== -1) {
          this.pausePool.splice(index, 1);
        }

        // 任务存进working线程池，并且获取idx
        this.workingPool.push(workingPromise);

        workingPromise
          .promiseProducer()
          .then(workingResult => {
            // 返回结果
            workingPromise.resolve(workingResult);

            doNext(workingPromise);
          })
          .catch(err => {
            workingPromise.reject(err);

            doNext(workingPromise);
          });
      }
    }
  }

  /**
   * 校验函数
   * @param {*} variable
   * @param {*} title
   * @param {*} expectType
   */
  validateType(variable, title, expectType) {
    const type = typeof expectType;

    if (typeof variable !== type) {
      throw `Promise Pool: ${title} must be a ${type}.`;
    }
  }
}

// global.initPromisePool = function(max) {
//   if (!instance) {
//     instance = new PromisePool(max);
//   }
//
//   return instance;
// };

module.exports = PromisePool;
