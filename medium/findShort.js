/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(str) {
  let wordLengths = str.split(' ').map(word => word.length);
  return Math.min(...wordLengths);
}