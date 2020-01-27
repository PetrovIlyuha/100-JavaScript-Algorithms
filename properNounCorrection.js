function properNounCorrection(inputString) {
  const startLetter = inputString[0].toUpperCase();
  return startLetter.concat(inputString.slice(1).toLowerCase());
}

console.log(properNounCorrection("mOsCoW"));
