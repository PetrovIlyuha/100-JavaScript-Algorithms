function houseNumbersSum(inputArray) {
  let total = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      return total;
    }
    total += inputArray[i];
  }
}

console.log(houseNumbersSum([5, 1, 2, 3, 4, 3, 0, 12, 23, 3, 4, 42]));
