/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


 - Get the frequency of all digits
 - Iterate through the frequency
 - Find the digit that occurs odd number of times

lettersFrequency(array) function
------------------------------
1. Create an empty object frequency
2. Iterate through input array
 - If the current element doesn't exist as a key inside the frequency
  - Use the current element as a key and value 0, add it to the frequency
 - Increment the current element's associated value by 1 inside frequency
3. Return frequency
*/

function findOdd(array) {
  let frequency = lettersFrequency(array);
  // console.log(frequency);
  for (let key in frequency) {
    if ((frequency[key] % 2) === 1) {
      return Number(key);
    }
  }
}


function lettersFrequency(arr) {
  let frequency = {};
  for (let ele of arr) {
    if (!frequency.hasOwnProperty(ele)) {
      frequency[ele] = 0;
    } 
    frequency[ele] += 1;
  }

  return frequency;
}

findOdd([0]);                         // 0
findOdd([1,1,2]);                     // 2
findOdd([0,1,0,1,0]);                 // 0
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]); // 4