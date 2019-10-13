function differentSymbols(string) {
  const uniqueChars = new Set();
  const inputChars = string.split('');

  inputChars.forEach((char) => {
    uniqueChars.add(char)
  })
  return uniqueChars.size;
}

console.log(differentSymbols('Procrastination is worst!!'))