// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];



// Retrieve the second tree from the variable myPlants using object dot and array bracket notation.
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1];



// Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.
// If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
// Your function must always return the entire collection object.
// There are several rules for handling incomplete data:
// If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
// If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
// If value is empty (""), delete the given prop property from the album.
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
if (value === "") delete collection[id][prop]
else if (prop == "tracks") {
  collection[id][prop] = collection[id][prop] || [];
  collection[id][prop].push(value);
} else { 
  collection[id][prop] = value;
}
  return collection;
}

updateRecords(5439, "artist", "ABBA");



// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
var myArray = [];
var i = 5;
while(i > -1) {
  myArray.push(i);
  i--;
}
