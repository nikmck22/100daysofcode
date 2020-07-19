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
