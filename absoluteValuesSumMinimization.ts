function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0;

  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length/2)];
}


console.log(absoluteValuesSumMinimization([2,5,7]));
console.log(absoluteValuesSumMinimization([2,5,7,8]));
console.log(absoluteValuesSumMinimization([2,5,7,10,12]));
console.log(absoluteValuesSumMinimization([2,5,7,13,15,19]));