function pageNumberingWithInk(current, numberOfDigits) {
  while (numberOfDigits >= current.toString().length) {
    numberOfDigits -= current.toString().length;

    if (numberOfDigits >= current.toString().length) {
      current++;
    }
  }
  return current;
}

console.log(pageNumberingWithInk(1, 5));
console.log(pageNumberingWithInk(21, 5));
console.log(pageNumberingWithInk(8, 5));
