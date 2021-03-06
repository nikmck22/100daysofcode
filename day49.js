// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  
  var newArr = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i)
  }
  var quot = 0;
  var loop = 1;
  var n;

  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}


console.log(smallestCommons([2,10]));



// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
function dropElements(arr, func) {
  var nums = arr.length;
  for (var i = 0; i < nums; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n >= 3; }));



//flatten nested array
function steamrollArray(arr) {
  return arr.reduce(function(a,b) {
    if (Array.isArray(b)) {
      return a.concat(steamrollArray(b));
    } 
    return a.concat(b);
  }, []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));



//convert binary to text
function binaryAgent(str) {
  var binary = str.split(' ');
  var output = binary
  .map(bin => String.fromCharCode(parseInt(bin,2)))
  .join('');
  return output;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
