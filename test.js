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
