function test() {
  let foo = 33;
  if (true) {
    let foo = (foo + 55); 
  }
}
test();