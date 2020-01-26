function pigLatin(word) {
  const letters = word.split("");
  const vowelRegex = /[aeiou]/;
  if (vowelRegex.test(letters[0])) {
    return `${word}way`;
  }

  while (true) {
    if (!vowelRegex.test(letters[0])) {
      letters.push(letters.splice(0, 1));
    } else {
      break;
    }
  }
  word = letters.join("") + "ay";
  return word;
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
