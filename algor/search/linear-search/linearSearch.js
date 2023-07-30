module.exports  = function linearSearch(array, targetEle) {
    let result = [];

    if(Array.isArray(array)) {
      for(let i = 0; i< array.length; i++) {
        if(array[i] === targetEle) {
          result.push(i);
        }
      }
    }
    return result.length > 0 ? result : null;
}