function quickSelect(arry, left, right, nth) {
  let index = partition(arry, left, right);
  if(index+1 === nth) {
    return arry[index];
  }
  
  if(index+1 < nth) {
    return quickSelect(arry, index+1, right, nth);
  }
  if(index+1 > nth) {
    return quickSelect(arry, left, index-1, nth);
  }
}

function partition(arry, left, right) {
  let i = left - 1;
  let pivot = right
  for(let j = left; j < pivot; j++) {
    if(arry[j] <= pivot) {
      i++;
      swap(arry, i, j);
    }
  }
  swap(arry, i+1, pivot);
  return i+1;
}

function swap(arry, a, b) {
  let temp = arry[a];
  arry[a] = arry[b];
  arry[b] = temp;
}