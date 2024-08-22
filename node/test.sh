function fn(x) {
  console.log('xxx===',x )
  return function(y) {
    return x + y;
  };
}
fn(1)(2)
