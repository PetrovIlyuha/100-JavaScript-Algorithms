function tandemRepeat(inputString) {
  const wordLength = inputString.length;

  if (wordLength % 2 === 0) {
    const firstHalf = inputString.slice(0, wordLength / 2);
    const secondHalf = inputString.slice(wordLength / 2, wordLength);
    return firstHalf === secondHalf;
  }

  return false;
}

console.log(tandemRepeat("randomrandom")); // true
console.log(tandemRepeat("HouseMouse")); // false
console.log(tandemRepeat("Upbringing")); // false
