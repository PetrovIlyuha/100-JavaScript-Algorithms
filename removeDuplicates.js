function removeDuplicates(string) {
  return [...new Set([...string.split(" ")])].join(" ");
}

console.log(removeDuplicates("This is is a test test string string"));
