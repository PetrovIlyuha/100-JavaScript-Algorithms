function adjacentElementsProduct(inputArray) {
  let largestProduct = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
      const product = inputArray[i] * inputArray[i+1];
      largestProduct = largestProduct < product ? product : largestProduct;
    }
  return largestProduct;
}

console.log(adjacentElementsProduct([3,5,4,15,65,43,21,1,32,34]));