function getOverlappingLetters(first, second) {
  const duplicates = [];
  for (let letter of first.toLowerCase()) {
    if (second.toLowerCase().includes(letter) && !duplicates.includes(letter)) {
      duplicates.push(letter);
    }
  }
  return duplicates.join("");
}

console.log(getOverlappingLetters("Happy New Year", "nyhz"));
