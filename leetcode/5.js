/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let mem  = [];
  let start = 0;
  let length = 1;
  
  // length 1, all letter is palindrome with 1 letter
  for(let i=0; i<s.length; i++) {
    mem[i] = [];
    mem[i][i] = true;
  }
  
  // length 2, check i+1 = i
  for(let i=0; i<s.length-1; i++) {
    if(s[i] === s[i+1]) {
      mem[i][i+1] = true
      start = i;
      length = 2;
    }
  }
  
  // length 3 or above,
  for(let i=3; i<=s.length; i++) { // i = substring length here
    for(let j=0; j+i<=s.length; j++) {
      if(s[j] === s[j+i-1] && mem[j+1][j+i-2] === true) {
        mem[j][j+i-1] = true;
        start = j;
        length = i;
      }
    }
  }
  return s.substring(start, start+length)
};