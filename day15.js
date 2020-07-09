// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sum(arr, n) {
if (n <= 0) {
  return 0;
} else {
  return sum(arr, n - 1) + arr[n - 1]
}
}



// Change randomFraction to return a random number instead of returning 0.
function randomFraction() {
  return Math.random();
}



// Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

//with radix
function convertToInteger(str) {
  return parseInt(str, 2);
  }
  convertToInteger("10011");


// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal"
  }
  checkEqual(1, 2);