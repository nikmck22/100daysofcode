//Whiteboard Challenge #1
//duplicates in an array
var containsDuplicate = function(nums) {
  for (var i = 0; i < nums.length; i++) {
      for (var j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
              return true
          } 
      }
  } return false
};


var containsDuplicate = function(nums) {
  let prev=null;
  nums=nums.sort();

  for (let i=0;i<nums.length;i++) {
    if (nums[i]===prev){
      return true;
    }else {
      prev=nums[i];
    } return false;
  }
};