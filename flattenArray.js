function flattenArray(arr) {
  const oneArray = [];
  flatten(arr);
  function flatten(arr) {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        oneArray.push(element);
      }
    });
  }

  return oneArray;
}

console.log(flattenArray([[["g"]], [["h"]]]));
console.log(flattenArray([1, [2, 3, [4, 5, [6, 7]]]]));
