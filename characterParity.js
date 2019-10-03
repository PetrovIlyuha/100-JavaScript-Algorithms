function characterParity(symbol) {
  const result = parseInt(symbol);
    return isNaN(result) ? 'Not a digit' : result % 2 === 0 ? "it's even" : "it's odd";
}

console.log(characterParity('a'))
console.log(characterParity(2))
console.log(characterParity('cb'))