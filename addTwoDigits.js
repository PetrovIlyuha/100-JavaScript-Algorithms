function addTwoDigits(n) {
  const nums = n.toString().split('');

  return nums.reduce((a, b) => parseInt(a) + parseInt(b));
}

console.log(addTwoDigits(123456789))