function longestDigitsPrefix(string) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const prefix = [];

  for (let char of string) {
    if (!digits.includes(char)) {
      break;
    }
    prefix.push(char);
  }
  return prefix.join("");
}

console.log(longestDigitsPrefix("12323dsfh32"));
