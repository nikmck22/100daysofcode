// Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".
var myDog = {
    name: "Molly",
    legs: 4,
    tails: 1,
    friends: ["Diesel", "Phillie"]
  };



// Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt; 



// Read the values of the properties "an entree" and "the drink" of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line



// Use the playerNumber variable to look up player 16 in testObj using bracket notation. Then assign that name to the player variable.
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   



// Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder"; //(update)
myDog.bark = "woof"; //(add)
delete myDog.tails; //(delete)



// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy", 
    "foxtrot": "Frank"
  }; 
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");



// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".
function checkObj(obj, checkProp) {
  // Only change code below this line
if(obj.hasOwnProperty(checkProp)) {
  return obj[checkProp];
} else {
  return "Not Found";
}
  return "Change Me!";
  // Only change code above this line
}



// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Fake Name",
    "title": "A Cool Song",
    "release_year": 1945,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
  }
  // Add a record here
];
