function palindromeRearranging(string) {
  let oddCount = 0;
  const chars = string.split("");
  const lettersObject = {};

  for (let i = 0; i < chars.length; i++) {
    if (lettersObject.hasOwnProperty(chars[i])) {
      lettersObject[chars[i]]++;
    } else {
      lettersObject[chars[i]] = 1;
    }
  }

  for (let key in lettersObject) {
    if (lettersObject[key] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount > 1
    ? "Can't be rearranged into a palindrome"
    : "Can be rearranged to be a palindrome";
}

console.log(palindromeRearranging("starstars"));
