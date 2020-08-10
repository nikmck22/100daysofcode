
function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var sum = 0;
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([10, 5]));
