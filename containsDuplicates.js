function containsDuplicates(arr) {
  let sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicates([1, 3, 5, 7, 5]));
console.log(containsDuplicates([1, 3, 2, 7, 5]));
