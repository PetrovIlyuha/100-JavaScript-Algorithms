function differentSymbols(string) {
  const uniqueChars = []
  const inputChars = string.split('')
  inputChars.forEach((char) => {
    if(!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    } 
  })
  return uniqueChars.length;
}

console.log(differentSymbols('cabac')) ;
