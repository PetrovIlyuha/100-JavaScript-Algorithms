function containsCloseNums(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if(arr[i] === arr[j]) {
          if(Math.abs(i - j) <= k) {
            return true;
          }
        }
      }
    }
  }

  return false;
}

console.log(containsCloseNums([1,2,3,4,5,2], 4));
console.log(containsCloseNums([1,2,3,4,2,7],2));