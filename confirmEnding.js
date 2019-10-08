function confirmEnding(string, target) {
  const start = string.length - target.length;
 
  return string.substr(start) === target;
}

console.log(confirmEnding("Discard","card"));
console.log(confirmEnding("Outcompete","compete"));