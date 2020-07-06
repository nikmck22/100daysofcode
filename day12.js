// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - "alpha"
// 2 - "beta"
// 3 - "gamma"
// 4 - "delta"
function caseInSwitch(val) {
  var answer = "";
switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3: 
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
  return answer;
}
caseInSwitch(1);


// Write a switch statement to set answer for the following conditions:
// "a" - "apple"
// "b" - "bird"
// "c" - "cat"
// default - "stuff"
function switchOfStuff(val) {
  var answer = "";
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
}
  return answer;
}
switchOfStuff(1);


// Write a switch statement to set answer for the following ranges:
// 1-3 - "Low"
// 4-6 - "Mid"
// 7-9 - "High"
function sequentialSizes(val) {
  var answer = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}
  return answer;
}
sequentialSizes(1);


// Fix the function isLess to remove the if/else statements.
function isLess(a, b) {
return (a < b);
}
isLess(10, 15);
