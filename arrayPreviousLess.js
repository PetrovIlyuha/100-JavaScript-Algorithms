// * Given array of integers, for each position "i" search among the previous positions for the last (from the left) 
// * position that contains a smaller value. Store this value at position "i" in the answer. 
// * If no such value can be found, then store -1 instead

function arrayPreviousLess(items) {
  const lessThanList = [];
  for (let i = items.length; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (items[i] > items[j]) {
        lessThanList.unshift(items[j]);
        break;
      } else if (j === 0) {
        lessThanList.unshift(-1);
      }
    }
  }
  return lessThanList;
}

console.log(arrayPreviousLess([8,1,7,2,5,4]));

// * Output : [ -1, -1, 1, 1, 2, 2, -1]