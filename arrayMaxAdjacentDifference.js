function arrayMaxAdjacentDifference(inputArray) {
  let maxDiff = Math.abs(inputArray[0] - inputArray[1]);
  for (let i = 1; i < inputArray.length; i++) {
    let absoluteDiff = Math.abs(inputArray[i-1] - inputArray[i]);    
    maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;    
  }
  return maxDiff;
}

