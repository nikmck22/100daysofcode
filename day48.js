//fibonacci sum of odd numbers below (num)
function sumFibs(num) {
  var a = 1, b = 0, c;
  var arr = [];
  var num2 = num;
  while (num2 >= 0) {
    c = a;
    a = a + b;
    b = c;
    if (b % 2 !== 0 && b <= num) {
      arr.push(b); 
    }
    num2--;
  }
  var arr2 = [];
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] <= num) {
      arr2.push(arr[j])
    }
  }
  var sum = arr.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sum;
}


console.log(sumFibs(4));

