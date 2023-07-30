/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  let mem = {}
  return _diff(input, mem);
};

function _diff(input, mem) {
  if(!input.match(/[-|+|\*]/g) ) {
    return [parseInt(input, 10)];
  }
  
  if(mem[input]) {
    return mem[input];
  }
  
  let result = [];
  for(let i=1; i<input.length; i++) {
    if(input[i] === '*' || input[i] === '+' || input[i] === '-') {
      let left = _diff(input.substring(0, i), mem);
      let right = _diff(input.substring(i+1, input.length), mem);
      for(let j=0; j<left.length; j++) {
        for(let k=0; k<right.length; k++) {
          result.push(_calc(left[j], input[i], right[k]));
        }
      }
    }
  }
  mem[input] = result
  return mem[input];
}

function _calc(a, operator, b) {
  switch(operator) {
    case '+':
      return parseInt(a, 10) + parseInt(b, 10);
    case '-':
      return parseInt(a, 10) - parseInt(b, 10);
    case '*':
      return parseInt(a, 10) * parseInt(b, 10);
  }
}

console.log(diffWaysToCompute('10+5*309+434-342'));