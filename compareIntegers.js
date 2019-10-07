function compareIntegers(num1, num2) {
  return parseInt(num1) > parseInt(num2) ? 'Greater' : parseInt(num1) < parseInt(num2) ? 'Less' : 'Equal'; 
}

console.log(compareIntegers('100','1003'));
console.log(compareIntegers('15','10'));
console.log(compareIntegers('10','10'));