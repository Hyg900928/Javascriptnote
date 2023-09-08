function test(a) {
  console.log(a)
  return (b) => {
    console.log(b)
  }
}
test(2)(1)
