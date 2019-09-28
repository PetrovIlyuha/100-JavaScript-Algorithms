function allLongestStrings(inputArray) {
  let longestLength = 0;
  const longestWords = [];
  inputArray.forEach((word) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });
  
  inputArray.forEach((word) => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });

  return longestWords;
}

console.log(allLongestStrings(['book', 'worm', 'sky', 'tea', 'stem', 'pea', 'desk']));