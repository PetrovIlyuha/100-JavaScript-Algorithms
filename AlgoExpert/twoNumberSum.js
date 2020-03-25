function twoNumberSum(inputArray, targetSum) {
  // naive brute-force implementation
  // for (let i = 0; i < inputArray.length; i++) {
  //   for (let j = 0;j < inputArray.length; j++) {
  //     if (i !== j && inputArray[i] + inputArray[j] === targetSum) {
  //       return [inputArray[i], inputArray[j]]
  //     }
  //   }
  // }
  // using hash-table principle
  // let hash = []
  // for (let i = 0; i < inputArray.length; i++) {
  //   let currentNum = inputArray[i];
  //   let y = targetSum - currentNum;
  //   if (!(hash.includes(y))) {
  //     hash.push(currentNum);      
  //   } else {
  //     return [currentNum, y];
  //   }
  // }  
  // Using pointers in a sorted array
  let sortedArray = inputArray.sort((a,b) => a - b)
  let leftPointer = sortedArray[0]
  let rightPointer = sortedArray[sortedArray.length - 1]
  for (let i = 1; i < inputArray.length - 1; i++) {
    if (leftPointer + rightPointer < targetSum) {      
      leftPointer = inputArray[i]     
    } else if (rightPointer + leftPointer > targetSum) {
      rightPointer = inputArray[inputArray.length - i - 1];      
    } else {
      return [rightPointer, leftPointer]
    }
  }
  
}

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6],10));
