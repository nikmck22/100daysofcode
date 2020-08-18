

function translatePigLatin(str) {
  let regEx = /[aeiou]/gi;
  let newStr = str.toLowerCase();
  let charIndex;

  if (newStr[0].match(regEx)) {
    return newStr + "way";
  }
  
  for (char of newStr) {
    if (char.match(regEx)) {
      charIndex = newStr.indexOf(char);
      break;
    }
  }
  return newStr.slice(charIndex) + newStr.slice(0, charIndex) + "ay";
}

console.log(translatePigLatin("consonant"));
