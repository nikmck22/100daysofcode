function confirmEnding(str, target) {
  var last = str.substring(str.length - target.length, str.length);
  if (last == target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "ian"));