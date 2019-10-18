function removeEveryKth(array, k) {
 return array.filter((element, index) => ((index + 1) % k !== 0))
}

console.log(removeEveryKth([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8], 2));