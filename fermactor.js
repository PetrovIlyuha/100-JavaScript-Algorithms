function fermactor(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 1; j < i; j++) {
      const total = i ** 2 - j ** 2;
      if (total === num) {
        return [i, j];
      }
    }
  }
  return "Not found...try another number";
}

console.log(fermactor(1456));

