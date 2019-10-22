function findClosestPair(numArray, sum) {
  let distance = -1;

  for (let i = 0; i < numArray.length; i++){
    for (let j = i + 1; j < numArray.length; j++){
      const distanceSum = numArray[i] + numArray[j];
      const absDistance = Math.abs(i - j);
     
      if (sum === distanceSum) {
        if (distance === -1 || absDistance < distance) {
          distance = absDistance;
        }
      }
    }
  }
  return distance;
}

console.log(findClosestPair([1,0,2,4,0,1,3,0], 5));
console.log(findClosestPair([1,0,2,4,0,1,3,0], 8));
