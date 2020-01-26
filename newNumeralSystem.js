function newNumeralSystem(number) {
  const numerals = [];
  let startCharCount = 65;
  let endCharCount = number.charCodeAt(0);

  while (startCharCount <= endCharCount) {
    const numeral = `${String.fromCharCode(
      startCharCount
    )} + ${String.fromCharCode(endCharCount)}`;
    numerals.push(numeral);
    startCharCount++;
    endCharCount--;
  }
  return numerals;
}

console.log(newNumeralSystem("G"));
