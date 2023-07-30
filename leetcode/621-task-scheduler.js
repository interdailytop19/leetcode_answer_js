/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */



// greedy
// https://youtu.be/OQKpjr13VNk
// https://youtu.be/YCD_iYxyXoo


var leastInterval = function(tasks, n) {
  let record = {};
  for(let i = 0; i < tasks.length; i++) {
    if(!record.hasOwnProperty(tasks[i])) {
      record[tasks[i]] = 1;
    } else {
      record[tasks[i]] += 1;
    }
  }

  let sorted = Object.values(record).sort((a, b) => a - b);
  let max_length = sorted[sorted.length-1] - 1;
  let square = max_length * (n + 1);
  
  let remaind_task = 0;
  for(let i = sorted.length - 1; i >= 0; i--) {
    if(sorted[i] > max_length) {
      remaind_task += sorted[i] - max_length;
    }
  }
  return Math.max(tasks.length, square + remaind_task);
};