function arrayMaxConsequtiveSum(inputArray, k) {
  let sum = 0;
  let max = 0;
  
  for (let i = 0; i < k; i++){
    sum += inputArray[i];
  }

  max = sum;

  for (let i = k; i < inputArray.length; i++) {
    sum -= inputArray[i-k];
    sum += inputArray[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
console.log(arrayMaxConsequtiveSum([2,3,5,1,6], 3));