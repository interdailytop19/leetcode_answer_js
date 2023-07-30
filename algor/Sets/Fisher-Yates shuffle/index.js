module.exports = function shuffle(arry) {
  if(!Array.isArray(arry)) return null;
  const input_arry = [...arry];

  let current_index = input_arry.length -1;

  while(current_index > 0) {
    const random_index = Math.floor(Math.random() * (current_index + 1));
    swap(current_index, random_index, input_arry);
    current_index -= 1;
  }
  return input_arry;
}

function swap(a, b, array) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}