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

//return the sum of all prime numbers less than (x)
function sumPrimes(num) {
  let i = 1;
  let sum = 0;
  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}
//function to check if a number is prime or not
function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return x !== 1 && x !== 0;
}

console.log(sumPrimes(10))