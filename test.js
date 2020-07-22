// function repeatStringNumTimes(str, num) {
//   if (num > 0) {
//     return str.repeat(num);
//   } else {
//     return "";
//   }
// }

// console.log(repeatStringNumTimes("abc", 3));


function repeatStringNumTimes(str, num) {
  var repeatStr = "";
  while (num > 0) {
    repeatStr += str;
    num--;
  }
  return repeatStr;
}

console.log(repeatStringNumTimes("abc", 3));
