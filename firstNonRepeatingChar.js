function firstNonRepeatingChar(string) {
  const chars = string.split("");
  let duplicates = {};
  let answer = "_";
  let indexAnswer = Number.MAX_SAFE_INTEGER;

  chars.forEach((element, index) => {
    if (!duplicates.hasOwnProperty(element)) {
      duplicates[element] = {
        count: 1,
        index
      };
    } else {
      duplicates[element].count++;
      duplicates[element].index = index;
    }
  });

  for (const key in duplicates) {
    if (duplicates[key].count === 1 && duplicates[key].index < indexAnswer) {
      answer = key;
      indexAnswer = duplicates[key].index;
    }
  }

  return answer;
}

console.log(firstNonRepeatingChar("appareel"));
