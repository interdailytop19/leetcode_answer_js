module.exports = function linearFind(arry, nth, startIndex=0, endIndex=arry.length -1, isRecusion=false) {
  if(!arry.length) {
    return new Error('emopty array');
  }

  if(nth > arry.length) {
    return new Error('array too small');
  }
  
  // find the nth smallest of the arry
  const original_arry = isRecusion ? arry : [...arry];

  // if(startIndex == endIndex) {
  //   return original_arry[startIndex];
  // }
  
  const pivot_index = partition(original_arry, startIndex, endIndex);

  if(pivot_index === nth) {
    return original_arry[nth];
  }
  else if(pivot_index < nth) {
    return linearFind(original_arry, nth, pivot_index + 1, endIndex, true);
  } else {
    return linearFind(original_arry, nth, startIndex, pivot_index - 1, true);
  }
}

function partition(arry, startIndex, endIndex) {
  const random_index = Math.floor(Math.random() * (endIndex+1 - startIndex) + startIndex);
  // swap pivot with last element of array
  swap(arry, random_index, endIndex);
  const pivot = arry[endIndex]

  let partition_index = startIndex;
  for(let i = startIndex; i < endIndex; i++) {
    if(arry[i] <= pivot) {
      swap(arry, i, partition_index);
      partition_index += 1;
    }
  }
  swap(arry, endIndex, partition_index);
  return partition_index;
}

function swap(arry, a, b) {
  const temp = arry[a];
  arry[a] = arry[b]
  arry[b] = temp;
}