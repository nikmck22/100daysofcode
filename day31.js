//OOP
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name)
console.log(dog.numLegs)


//create a method on an object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs."}
};

dog.sayLegs();


// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.
function Dog() {
  this.name = "Molly";
  this.color = "brown";
  this.numLegs = 4;
}


//instance of
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(3)
myHouse instanceof House


//own properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}