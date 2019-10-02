function caseInsensitivePalindrome(inputString) {
  const originalLowerCase = inputString.toLowerCase();
  const reversedWord = inputString.toLowerCase().split('').reverse().join('');
   
  if (originalLowerCase !== reversedWord) {
    return `This string -> ${originalLowerCase} is NOT a palindrome at all`;
  } else {
    return `This string -> ${originalLowerCase} -> IS a valid case-insensitive palindrome`
  }  
}

