function bouncer(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));

