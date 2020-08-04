// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
return title
.split(/\W/)
.filter(obj => {
  return obj !== "";
})
.join("-")
.toLowerCase();

}
// Only change code above this line
console.log(urlSlug(globalTitle))