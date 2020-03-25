function flattenArray(inputArray) {
  let newArray = inputArray.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flattenArray(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);

  return newArray;
}

console.log(flattenArray([1, [2, 3, [95, 22]], 4]));
