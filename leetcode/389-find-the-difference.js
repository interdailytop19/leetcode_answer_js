// time O(s+t)
// space O(1)

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

// bit
// var findTheDifference = function(s, t) {
//     let res = 0;
//     for (let i = 0; i < s.length; i += 1) {
//         res ^= s.charCodeAt(i);
//     }
//     for (let i = 0; i < t.length; i += 1) {
//         res ^= t.charCodeAt(i);
//     }
    
//     return String.fromCharCode(res);
// };


var findTheDifference = function(s, t) {
  let sCharCodeSum = 0;
  let tCharCodeSum = 0;
  for (let i = 0; i < s.length; i += 1) {
    sCharCodeSum += s.charCodeAt(i);
  }
  for (let i = 0; i < t.length; i += 1) {
    tCharCodeSum += t.charCodeAt(i);
  }
  
  return String.fromCharCode(tCharCodeSum - sCharCodeSum);
};