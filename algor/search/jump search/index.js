module.exports = function JumpSearch(sortedArray, targetEle) {
  let result = [];
  if(Array.isArray(sortedArray)) {

    if(sortedArray.length === 0) {
      return null;
    }

    const jumpSize = Math.floor(Math.sqrt(sortedArray.length));

    let blockStart = 0;
    let blockEnd = jumpSize;
    while(sortedArray[blockEnd] && targetEle > sortedArray[blockStart]) {
      blockStart = blockEnd;
      blockEnd += jumpSize;
    }

    for(let i = blockStart; i < blockEnd; i++) {
      if(sortedArray[i] === targetEle) {
        result.push(i);
      }
    }
  }

  return result.length > 0 ? result : null;
}