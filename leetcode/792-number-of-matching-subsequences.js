// binary search
// https://leetcode.com/problems/number-of-matching-subsequences/discuss/480167/Javascript-Binary-Search
var numMatchingSubseq = function(S, words) {
  let dict = {}
  
  // init letter in dict
  for(let i = 0; i < S.length; i++) {
    if(!dict.hasOwnProperty(S[i])) {
      dict[S[i]] = [i];
    } else {
      dict[S[i]].push(i);
    }
  }

  // loop over words
  let count = 0;
  for(let i = 0; i < words.length; i++) {
    if(isMatchingSubseq(dict, words[i])) {
      count ++;
    }
  }
  return count;
};

function isMatchingSubseq(dict, word) {
  // loop through each letter
  let prev = 0;
  for(let i = 0; i < word.length; i++) {
    if(!dict[word[i]]) {
      return false;
    }
    let index = binarySearch(dict, word[i], prev);
    if(index < 0) {
      index = -index - 1;
    }
    if(index === dict[word[i]].length) {
      return false;
    }
    prev = dict[word[i]][index] + 1;
  }
  return true;
}

function binarySearch(dict, letter, prev) {
  let left = 0;
  let right = dict[letter].length - 1;
  let mid = Math.floor((left + right) /2);
  while(left <= right) {
    mid = Math.floor((left + right) /2);
    if(dict[letter][mid] < prev) {
      left = mid + 1;
    }
    else if(dict[letter][mid] > prev) {
      right = mid - 1;
    } else {
      return mid
    }
  }
  return -(left + 1);
}

