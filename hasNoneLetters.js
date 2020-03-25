function hasNoneLetters(blacklist, phrase) {
  return blacklist
    .toLowerCase()
    .split("")
    .map(
      letter =>
        !phrase
          .toLowerCase()
          .split("")
          .includes(letter)
    )
    .every(value => value === true);
}

console.log(hasNoneLetters("abcdef", "fruit"));
console.log(hasNoneLetters("ABCD", "def"));
