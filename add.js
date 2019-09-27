function add(...param1) {
  let total = 0;
  param1.forEach((num) => {
    total += num;
  })
  return total;
}

console.log(add(2,3,5));