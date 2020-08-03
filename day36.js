// Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));



// Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingPush(first, second));
