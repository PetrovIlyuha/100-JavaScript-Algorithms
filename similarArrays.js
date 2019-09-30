function similarArrays(a,b) {
  if (a.length !== b.length) return `Array ${a} have different length compared to ${b}`;  
  let sortedA = a.sort((a,b) => a - b);
  let sortedB = b.sort((a,b) => a - b);
  for (let i = 0; i <= a.length; i++) {
    if (a[i] !== b[i]) {
      return `Arrays are not equal...`;
     } else {
      return `Arrays ${a} and ${b} are equal`;
    }
  }
}

console.log(similarArrays([10,11,12], [12,11,10]));
console.log(similarArrays([5,8,9], [8,9,5,10]));
console.log(similarArrays([5,8,9], [8,9,4]));
console.log(similarArrays([1,15,7], [15,7,1]));