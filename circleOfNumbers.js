function circleOfNumbers(num, firstNumber) {
  const numArray = [];
  const halfWay = num / 2;
  
  for (let i = 1; i <= num; i++) {
    numArray.push(i);
  }
  
  if (firstNumber < halfWay) {
    return numArray[firstNumber + halfWay]
  }

  return numArray[firstNumber - halfWay];
}

console.log(circleOfNumbers(20,11));