/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let left = 0;
  let right = letters.length;
  
  while(left < right) {
    let mid = Math.floor((left + right) / 2);
    if(letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return letters[left % letters.length];
};

// var nextGreatestLetter = function(letters, target) {
//   let left = 0;
//   let right = letters.length - 1;
  
//   while(left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if(letters[mid] <= target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   if(left >= 0 && left < letters.length) {
//     return letters[left];
//   }
//   return letters[0];
// };

