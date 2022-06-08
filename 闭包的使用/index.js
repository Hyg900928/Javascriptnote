Function.prototype.before = function (beforeFn) {
  const _self = this;
  return function() {
    beforeFn.apply(this, arguments);
    return _self.apply(this, arguments);
  }
};

Function.prototype.after = function (afterFn) {
  const _self = this;
  return function() {
    const ret = _self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  }
};

let func = function () {
  console.log(2)

};
func =func.before(() => {
  console.log(1)
}).after(() => {
  console.log(3)
});

func();


const getSingle = (fn) => {
  let ret;
  return () => {
    return ret || (ret = fn.apply(this, arguments));
  }
};

const getScript = getSingle(() => {
  return {
    name: 'xiaoming',
    age: '20'
  }
});

const str1 = getScript();
const str2 = getScript();

console.log(str1 === str2);