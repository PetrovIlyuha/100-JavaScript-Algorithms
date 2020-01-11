function makeArrayConsecutive(arr) {
  let count = 0;
  const sortedNumbers = arr.sort((a, b) => a - b);
  const min = sortedNumbers[0];
  const max = sortedNumbers[sortedNumbers.length - 1];
  return count;
}

console.log(makeArrayConsecutive([4, 2, 3, 9]));
