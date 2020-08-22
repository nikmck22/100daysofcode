function sumFibs(num) {
  var a = 0;
  var b = 1;
  var c;
  for (var i = 0; i < num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

console.log(sumFibs(4));