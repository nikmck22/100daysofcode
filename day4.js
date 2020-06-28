// Challenge: Upsell Quantity

/*
 1. Our business wants to upsell items in a user's cart. 
 2. Ask the user if they would like to add one more item (with the variable provided). Update the quantity variable if they do.
 3. Log the current quantity.
*/
const customerAnswer = Math.random() >= 0.5;
let quantity = 2;

if (customerAnswer) {
  quantity++;
}


console.log(quantity)