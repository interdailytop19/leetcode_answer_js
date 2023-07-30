/**
 * @param {string[]} strs
 * @return {string}
 */

// https://www.youtube.com/watch?v=bl8ue-dTxgs
var longestCommonPrefix = function(strs) {
  if(strs.length <= 0) {
    return '';
  }
  let result = strs[0];
  for(let i = 1; i < strs.length; i++) {
    while(strs[i].indexOf(result) != 0) {
      result = result.substring(0, result.length-1);
    }
    
  }
  return result;
};