function largestInSubArrays(nums) {
  const highestNumbers = [];
  for (let numberGroup of nums) {
    highestNumbers.push(Math.max(...numberGroup));
  }
  return highestNumbers;
}

console.log(
  largestInSubArrays([
    [5, 43, 4, 2],
    [13, 43, 87, 887],
    [2, 4, 32, 44],
    [0, 0, 1, 239]
  ])
);
