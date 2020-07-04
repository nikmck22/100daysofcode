// Modify the new array myArray so that it contains both a string and a number (in that order).
var myArray = ["dog", 6];

// Create a nested array called myArray.
var myArray = [["dog", "cat"], ["fish", "bird"]];


// Create a variable called myData and set it to equal the first value of myArray using bracket notation.
var myArray = [50,60,70];
var myData = myArray[0];


// Modify the data stored at index 0 of myArray to a value of 45.
var myArray = [18,64,99];
myArray[0] = 45;


// Using bracket notation select an element from myArray such that myData is equal to 8.
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];


// Push ["dog", 3] onto the end of the myArray variable.
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])


// Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();


// Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.shift();


// Add ["Paul",35] to the beginning of the myArray variable using unshift().
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);


// Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
// The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
// ["Chocolate Bar", 15]
// There should be at least 5 sub-arrays in the list.
var myList = [["dog food", 2], ["fruit", 5], ["veggies", 5], ["cereal", 1], ["coffee", 2]];


// Create a function called reusableFunction which prints "Hi World" to the dev console.
// Call the function.
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();


// Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
// Call the function with two numbers as arguments.
function functionWithArgs(par1, par2) {
  console.log(par1 + par2);
}
functionWithArgs(2, 3)


// Add a local variable to myOutfit function to override the value of outerWear with "sweater".
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
myOutfit();


// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value. See the last line in the editor for an example of how you can test your timesFive function.
function timesFive(num) {
  return num * 5;
}
timesFive(2);