function checkPalindrome(inputString) {
  const originalLowerCase = inputString.toLowerCase();

  return originalLowerCase.split('').reverse().join('') === originalLowerCase ? 'Valid Palindrome' : 'Not a palindrome';
}

console.log(checkPalindrome('digid digid digid'))
console.log(checkPalindrome('digital'))
console.log(checkPalindrome('kayak'))