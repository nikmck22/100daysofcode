//return truthy values
function bouncer(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));



//get index number to insert
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

console.log(getIndexToIns([40, 60, 30, 20, 90, 45, 15], 50));


