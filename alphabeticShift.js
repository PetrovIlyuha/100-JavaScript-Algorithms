function alphabeticShift(inputString) {
  const alphabet = Array.from(("abcdefghijklmnopqrstuvwxyz").split(""));
  let inputShifted = inputString.split('');

  for (let i = 0; i < inputString.length; i++) {
    let index = 0;

    if (inputShifted[i] !== 'z') {
      index = alphabet.indexOf(inputShifted[i]) + 1;
    }
    inputShifted[i] = alphabet[index]
  }

  return inputShifted.join('')
}

console.log(alphabeticShift('apple'))