/* Challenge - User Profile Form
    1. Your organization needs the user's personal information to ship the inventory to. Create an object to store the data in.
    2. Store a user's first and last name.
    3. Store a user's address. City and state will be enough. Have this as a nested object. (Interface Segregation Principle)
    4. The business wants to give more personalized ads and wants to collect information about the user's hobbies. Create a list of hobbies.
    5. Are they a gold member? Store a boolean with this value.
*/


const user = {
  firstName: 'bob',
  lastName: 'smith'
};

user['address'] = {
  city: 'atlanta',
  state: 'georgia'
};

user.hobbies = ['fishing', 'boating'];
user.isGoldMember = true;
 

console.log(user.address)