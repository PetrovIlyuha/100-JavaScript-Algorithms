function luckyNumber(number) {
  const luckyN = number.toString();
  const half = luckyN.length / 2;
  const firstHalf = getTotal(luckyN.substr(0, half));
  const secondHalf = getTotal(luckyN.substr(half, luckyN.length));
  return firstHalf === secondHalf
    ? "Your number is somewhat Lucky"
    : "Not a lucky number in some cultural settings";
}

function getTotal(string) {
  return string
    .split("")
    .map(char => parseInt(char))
    .reduce((a, b) => a + b, 0);
}
console.log(luckyNumber(1230));
console.log(luckyNumber(239017));
