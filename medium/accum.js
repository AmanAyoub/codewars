/*
This time no story, no theory. The examples below show you how to write function accum:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
	let resultStr = "";
  for (let idx = 0; idx < s.length; idx++) {
    resultStr += s[idx].toUpperCase() + s[idx].repeat(idx).toLowerCase();
    if (idx < (s.length - 1)) {
      resultStr += "-";
    }
  }
  
  return resultStr;
}

console.log(accum("abcd")) // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")) // "C-Ww-Aaa-Tttt"