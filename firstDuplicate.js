function firstDuplicate(inputArray) {
  const firstAppeared = {};

  for (let num of inputArray) {
    if (firstAppeared.hasOwnProperty(num)) {
      return num;
    } else {
      firstAppeared[num] = num;
    }
  }
  return -1;
}

console.log(firstDuplicate([1, 2, 5, 3, 1, 4, 6, 3, 2]));
