module.exports = function(N) {
  if(typeof N != 'number') {
    return null;
  }
  
  if(N === 0) {
    return '0';
  }
  
  let result_stirng = '';
  let n = N
  let r;
  while(n != 0) {
    r = n % 2;
    n = Math.floor(n/2);
    result_stirng = String(r) + result_stirng;
  }
  return result_stirng;
};