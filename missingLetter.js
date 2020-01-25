function missingLetter(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const chars = string.split("");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== alphabet[i]) {
      return alphabet[i];
    }
  }
  return "all is fine with this letters's string";
}

console.log(missingLetter("abcde"));
console.log(missingLetter("abcdefghjklmorq"));
console.log(missingLetter("abcegiklopqrtuwz"));
