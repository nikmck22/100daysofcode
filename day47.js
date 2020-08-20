//missing letters
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));


//unique values
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


//html entities
function convertHTML(str) {
  function strEncode(char) {
    switch (char) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    case "'":
      return "&apos;";
    case '"':
      return "&quot;";
    }
  }
  return str.replace(/[&<>"';]/g, strEncode);
}

console.log(convertHTML("Schindler's List"));