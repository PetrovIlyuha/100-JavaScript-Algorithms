function evenDigitOnly(n) {
  const digits = n.toString().split('');

  return digits.every((digit) => parseInt(digit) % 2 === 0);
}

console.log(evenDigitOnly(32143));
console.log(evenDigitOnly(2468));