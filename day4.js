// Challenge 1: User Age

/*
 1. Our business wants to keep track of what age range a user falls into.
 2. If they are 12 or younger log 'child'.
 3. If not a child but the user's age is under 20 log 'teenager'.
 4. If neither log 'adult'.
*/

const age = 10;

if (age > 12 && age < 20) {
  console.log('teenager');
} else if (age <= 12) {
  console.log('child');
} else {
  console.log('adult');
}

// OR see below
// if(age <= 12) {
//   console.log('child');
// } else if(age < 20) {
//   console.log('teenager');
// } else {
//   console.log('adult');
// }


// Challenge 2: Practice and or Operators

/*
    1. Look at the examples below and see if you can guess the 
*/

// console.log(10 === 10 && 5 < 4); false

// console.log(10 === 10 || 5 < 4); true

// console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5); true
