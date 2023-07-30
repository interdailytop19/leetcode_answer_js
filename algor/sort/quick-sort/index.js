function quickSort(
  original_arry,
  low_index=0,
  high_index=original_arry.length-1,
  recursive_call=false
  ) {
  let array = recursive_call ? original_arry : [...original_arry]
  

  if(low_index < high_index) {
    let partition_index = partition(array, low_index, high_index);
    const recursive_call = true;
    quickSort(array, low_index, partition_index -1, recursive_call);
    quickSort(array, partition_index +1, high_index, recursive_call);
  }
  return array;
}

function partition(array, low_index, high_index) {
  const pivot = high_index;
  let partition_index = low_index;

  for(let i = low_index; i < pivot; i++) {
    if(array[i] <= array[pivot]) {
      swap(array, i, partition_index);
      partition_index += 1;
    }
  }
  swap(array, partition_index, pivot);
  return partition_index;
}

function swap(array,a,b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

module.exports = quickSort;