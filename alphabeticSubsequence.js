function alphabeticSubsequence(string) {
  const chars = string.split('');
  const charValues = [];
  chars.forEach(char => {
    charValues.push(char.charCodeAt(0));
    console.log(charValues)
  });

  if(new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i+1] < charValues[i]) {
      return false;
    }
  }
  return true;
}

console.log(alphabeticSubsequence('abh'));
console.log(alphabeticSubsequence('aghra'));
console.log(alphabeticSubsequence('abcda'));
console.log(alphabeticSubsequence('xyzu'));
console.log(alphabeticSubsequence('defgya'));
