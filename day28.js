//title case a sentence
function titleCase(str) {
  var sentence = str.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(" ");
}

console.log(titleCase("I'm a little tea pot"));



//slice and splice
function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    n++;
  }
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
