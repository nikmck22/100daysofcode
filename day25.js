//convert celsius to fahrenheit
function convertToF(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}

console.log(convertToF(30));



//reverse a string
function reverseString(str) {
  return str
  .split("")
  .reverse()
  .join("");
}

console.log(reverseString("hello"));



//factorialize the number
function factorialize(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

console.log(factorialize(5));



//find the longest word in the array (return number)
function findLongestWordLength(str) {
  let arr = str.split(" ");
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

