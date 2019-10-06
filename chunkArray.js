function chunkArray(array, chunkSize) {
  const nested = [];
  let index = 0;

  while (index < array.length){
    nested.push(array.slice(index, index += chunkSize));
    console.log(nested)
  }

  return nested;
}

console.log(chunkArray(["a","b","c","d"], 2))
console.log(chunkArray([1,2,3,4,5,6], 3))