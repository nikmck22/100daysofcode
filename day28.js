//title case a sentence
function titleCase(str) {
  var sentence = str.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
