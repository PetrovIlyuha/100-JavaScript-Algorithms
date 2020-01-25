function makeArrayConsecutive(arr) {
  let count = 0;
  const sortedNumbers = arr.sort((a, b) => a - b);
  const min = sortedNumbers[0];
  const max = sortedNumbers[sortedNumbers.length - 1];
  for (let i = min; i < max; i++) {
    if (arr.indexOf(i) === -1) {
      count++;
    }
  }
  return count;
}

console.log(makeArrayConsecutive([4, 2, 3, 9]));
