//squareList function so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.
const squareList = (arr) => {
  // Only change code below this line
  return arr.filter(num => num > 0 && num % parseInt(num) === 0).map(num => Math.pow(num, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);



// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
function alphabeticalOrder(arr) {
  // Only change code below this line
return arr.sort(function(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
});

  // Only change code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));



//return sorted array without changing original
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  arr = globalArray.slice(0);
return arr.sort(function(a, b) {
  return a - b;
});

  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));



//regular expression - remove non-word characters

function splitify(str) {
  // Only change code below this line
return str.split(/\W/);

  // Only change code above this line
}
console.log(splitify("Hello World,I-am code"));



//Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.
function sentensify(str) {
  // Only change code below this line
return str.split(/\W/).join(" ");

  // Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you"));




//converting string to URL slug
// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
return title
.split(/\W/)
.filter(obj => {
  return obj !== "";
})
.join("-")
.toLowerCase();

}
// Only change code above this line
console.log(urlSlug(globalTitle))