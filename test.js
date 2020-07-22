//truncate a string
function truncateString(str, num) {
  var strLen = str.length;
  var trunc = "...";
  if (strLen > num) {
    return str.substring(0, num) + trunc;
  } 
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
