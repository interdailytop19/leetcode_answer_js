module.exports = function mergeSort(arry) {
  if(!Array.isArray(arry)) {
    return;
  }

  if(arry.length <= 1) {
    return arry;
  }

  const mid_index = Math.floor(arry.length/2);
  const left = arry.slice(0, mid_index);
  const right = arry.slice(mid_index, arry.length);

  const left_sorted = mergeSort(left);
  const right_sorted = mergeSort(right);

  return merge(left_sorted, right_sorted);
}

function merge(left, right) {
  let merged = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  if(left.length) {
    merged = merged.concat(left);
  }

  if(right.length) {
    merged = merged.concat(right);
  }

  return merged;
}