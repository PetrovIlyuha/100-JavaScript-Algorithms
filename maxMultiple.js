function maxMultiple(divisor, bound) {
  let remainder = bound % divisor;
  return bound - remainder;
}

console.log(maxMultiple(3, 10));
