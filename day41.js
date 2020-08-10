// return sum of all numbers between the two elements of an array
function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var sum = 0;
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([10, 5]));


// returning duplicates in different arrays
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.filter(item => !arr1.includes(item) || !arr2.includes(item));
  
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
