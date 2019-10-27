function add(param1: number, param2: number): number {
  return param1 + param2;
}

function add2(...param1: number[]): number {
  let total = 0;
  param1.forEach((num) => {
    total += num;
  })
  return total;
}

console.log(add(3,5));
console.log(add(4,6));
console.log(add2(3,5,6,7,8,9))