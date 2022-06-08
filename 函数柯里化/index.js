const currying = function(fn) {
  const args = [];
  return () => {
    if (arguments.length === 0) {
      // console.log('this', JSON.stringify(this))
      return fn.apply(this, args);
    } else {
      [].push.apply(args, arguments);
      console.log(args);
    }
  };
};

let cost = (function() {
  let money = 0;
  return function() {
    for (let i = 0; i < arguments.length; i++) {
      money += arguments[i];
    }
    return money;
  };
})();

cost = currying(cost);
//
cost(100);
cost(200);
cost(300);

console.log(cost());


