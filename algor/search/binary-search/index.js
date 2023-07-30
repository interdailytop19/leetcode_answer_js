module.exports = function binarySearch(sortedArray, targetEle) {
  if(!Array.isArray(sortedArray)) {
    return null
  }

  if(sortedArray.length === 0) {
    return null;
  }

  let startIndex = 0;
  let endIndex = sortedArray.length - 1

  while(startIndex <= endIndex) {
    let medianInex = startIndex + Math.floor((endIndex - startIndex)/2);

    if(sortedArray[medianInex] === targetEle) {
      return medianInex;
    }

    if(sortedArray[medianInex] < targetEle) {
      startIndex = medianInex + 1;
    } else {
      endIndex = medianInex - 1;
    }
  }

  return null;
}