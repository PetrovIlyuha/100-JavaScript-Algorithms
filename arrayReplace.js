// * Given array of integers, replace all the 
// * occurences of elemToReplace with SubstitutionElem


function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  inputArray.forEach((element, index) => {
    if (element === elemToReplace) {
      inputArray[index] = substitutionElem;
    }
  });  
  return inputArray;
}

console.log(arrayReplace([1,2,5,4,5,6,5,8], 5, 10));

// * Output: [1,2,10,4,10,6,10,8]