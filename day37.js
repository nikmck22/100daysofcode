//squareList function so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.
const squareList = (arr) => {
  
  return arr.filter(num => num > 0 && num % parseInt(num) === 0).map(num => Math.pow(num, 2));
  
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);



// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
function alphabeticalOrder(arr) {
  
return arr.sort(function(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
});

  
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));



//return sorted array without changing original
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  
  arr = globalArray.slice(0);
return arr.sort(function(a, b) {
  return a - b;
});

  
}
console.log(nonMutatingSort(globalArray));



//regular expression - remove non-word characters

function splitify(str) {
  
return str.split(/\W/);

  
}
console.log(splitify("Hello World,I-am code"));



//Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.
function sentensify(str) {
  
return str.split(/\W/).join(" ");

  
}
console.log(sentensify("May-the-force-be-with-you"));




//converting string to URL slug
// The global variable
var globalTitle = "Winter Is Coming";


function urlSlug(title) {
return title
.split(/\W/)
.filter(obj => {
  return obj !== "";
})
.join("-")
.toLowerCase();

}

console.log(urlSlug(globalTitle))




//every method
function checkPositive(arr) {
  
return arr.every(function(value) {
  return value > 0;
})

  
}
console.log(checkPositive([1, 2, 3, -4, 5]));

//some method
function checkPositive(arr) {
  
return arr.some(function(value) {
  return value > 0;
})

  
}
console.log(checkPositive([1, 2, 3, -4, 5]));




//currying and partial application
function add(x) {
  
return function(y) {
  return function(z) {
    return x + y + z
  }
}

  
}
console.log(add(10)(20)(30));
