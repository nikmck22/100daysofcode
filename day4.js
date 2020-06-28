// Challenge: Checkout

/*
 1. Go through the full checkout process.
 2. Use getUserCredentials provided that returns the first name, last name and concats with email.  
 3. Write a function called getPreTaxTotal that take in our cartItems and returns the total without tax.
 4. Pass the preTaxTotal value to a getTaxedTotal function that returns the value with tax.
 5. Log each value from the 3 functions out. 
*/

function getUserCredentials(firstName, lastName, email) {
    return `${firstName} ${lastName} | ${email}`
}

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];

function getPreTaxTotal(cartItems) {
  let total = 0;
  for (let cartItem of cartItems) {
    total += cartItem.quantity * cartItem.price;
  }
  return total;
}

const preTax = getPreTaxTotal(cartItems);

function getTaxedTotal(preTax) {
  return preTax *= 1.08;
}

const finalTax = getTaxedTotal(preTax);

console.log(getPreTaxTotal(cartItems));
console.log(preTax);
console.log(finalTax);
