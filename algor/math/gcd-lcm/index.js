function gcd(a,b) {
  if(typeof a != 'number' || typeof b != 'number') {
    return null;
  }
  if(!b) {
    return a;
  }
  return gcd(b, a%b);
}

function lcm(a,b) {
  if(typeof a != 'number' || typeof b != 'number') {
    return null;
  }
  return Math.abs(a*b) / gcd(a,b);
}

module.exports = {
  lcm,
  gcd
}

