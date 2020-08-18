//search and replace
function myReplace(str, before, after) {
  var index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


//DNA base pairs
function pairElement(str) {
  var newArr = [];
  var search = function(char) {
    switch (char) {
      case "A":
        newArr.push(["A", "T"]);
        break;  
      case "T":
        newArr.push(["T", "A"]);
        break;
      case "C":
        newArr.push(["C", "G"]);
        break;
      case "G":
        newArr.push(["G", "C"]);
        break;
    }
  };
  for (var i = 0; i < str.length; i++) {
    search(str[i])
  }
  return newArr;
}

console.log(pairElement("GCG"));