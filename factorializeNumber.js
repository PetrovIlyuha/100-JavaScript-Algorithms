function factorializeNumber(num) {
    let total = 1;
    for (let i = 1; i <= num; i++) {
      total *= i;
    }
    return total;
}

console.log(factorializeNumber(5));