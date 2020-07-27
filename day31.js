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