// Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);


// Apply the .match() method to extract the word coding.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(/coding/); 

