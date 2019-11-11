function hasNoneLetters(blacklist, phrase) {
  console.log(blacklist.toLowerCase());
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

console.log(hasNoneLetters("abcdef", "fgh"));
console.log(hasNoneLetters("ABCD", "def"));
