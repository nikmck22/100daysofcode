// Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
function Dog(name) {
  this.name = name;
}


function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}



// Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  
  numLegs: 4,
  eat: function() {
    console.log("kibble")
  },
  describe: function() {
    console.log("furry and has a tail")
  }
};



// Define the constructor property on the Dog prototype.
function Dog(name) {
  this.name = name;
}


Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


// Use isPrototypeOf to check the prototype of beagle.
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");


Dog.prototype.isPrototypeOf(beagle)



// Use Object.create to make two instances of Animal named duck and beagle.
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};



let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype); 



// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!")
}


let beagle = new Dog();



// Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
(function () {
  console.log()
})()





