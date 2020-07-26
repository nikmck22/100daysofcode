//mutations
function mutation(arr) {
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase();
  
  for (let i = 0; i < word2.length; i++) {
    if (word1.indexOf(word2[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hELLo", "HEY"]));



//splitting arrays into two-dimensional arrays
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
