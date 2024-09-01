/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example:
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

In: string
Out: boolean
Rules:
 - Case doesn't matter
 - Empty string is isogram
 - isogram is a string that contains unique chars

Object: to store the frequency of the letters

 - Get the frequency of the letters
 - If a letter occurs multiple times, return false
 - Otherwise, return true

1. If the input string is empty, return true
2. Get the frequency of the input string
3. If any letter occurs more than once inside frequency, return false 
4. Otherwise, return true

lettersFrequency(string) function
------------------------------
1. Create an empty object frequency
2. Iterate through input string
 - If the current char doesn't exist as a key inside the frequency
  - Use the current char as a key and value 0, add it to the frequency
 - Increment the current char associated value by 1 inside frequency
3. Return frequency
*/


function isIsogram(string) {
  if (string === '') return true;
  string = string.toLowerCase();

  let frequency = lettersFrequency(string);
  return Math.max(...Object.values(frequency)) === 1;
}

function lettersFrequency(string) {
  let frequency = {};
  for (let char of string) {
    if (!frequency.hasOwnProperty(char)) {
      frequency[char] = 0;
    } 
    frequency[char] += 1;
  }

  return frequency;
}

isIsogram("Dermatoglyphics"); // true
isIsogram("aba"); // false
isIsogram("moOse"); // false