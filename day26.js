//largest number in each array
function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let largeNum = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largeNum) {
        largeNum = arr[i][j];
      }
    }
    newArr[i] = largeNum;
  }
  return newArr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));



//confirm the ending of a string matches the target
function confirmEnding(str, target) {
  var last = str.substring(str.length - target.length, str.length);
  if (last == target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "ian"));

function repeatStringNumTimes(str, num) {
  var repeatStr = "";
  while (num > 0) {
    repeatStr += str;
    num--;
  }
  return repeatStr;
}