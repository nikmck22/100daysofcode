// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
  return collection.every(function(item) {
    return item.hasOwnProperty(pre) && Boolean(item[pre]);
  });
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa"}, {"user": "Po", "sex": "female"}], "sex"));




//optional arguments
function addTogether() {
  var checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };

  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    } 
  } else {
    var c = arguments[0];
    if (checkNum(c)) {
      return function(arg2) {
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          return c + arg2;
        }
      };
    }
  }
}

console.log(addTogether(2));


