function uniteUnique(arr) {
  var newArr = [];
  for (var i = 0; i < arguments.length; i++) {
    var temp = arguments[i];
    for (var g = 0; g < temp.length; g++) {
      var temp2 = temp[g];
      if (newArr.indexOf(temp2) < 0) {
        newArr.push(temp2);
      }  
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));