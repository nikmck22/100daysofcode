function largestOfFour(arr) {
  let newArr = [0 ,0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > newArr[i]) {
        newArr[i] = arr[i][j];
      }
    }
  }
  return newArr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
