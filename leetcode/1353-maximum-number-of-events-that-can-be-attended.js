/**
 * @param {number[][]} events
 * @return {number}
 */

 // O(n**2)
 // https://youtu.be/NjF9JGDGxg8
var maxEvents = function(events) {
  events.sort((a, b) => a[1] - b[1]);

  let result = 0;
  let date = new Array(10001).fill(0)
  for(let i = 0; i < events.length; i++) {
    for(let j = events[i][0]; j <= events[i][1]; j++) {
      if(date[j]) {
        continue;
      }
      date[j] = 1;
      result += 1;
      break;
    }
  }
  return result
};