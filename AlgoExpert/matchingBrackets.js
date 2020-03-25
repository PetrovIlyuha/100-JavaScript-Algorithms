function balancedBrackets(string) {
  const closingBrackets = [")", "}", "]"];
  const openingBrackets = ["(", "{", "["];
  const matchingBrackets = new Map();
  matchingBrackets.set(")", "(");
  matchingBrackets.set("}", "{");
  matchingBrackets.set("]", "[");
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (openingBrackets.includes(string[i])) {
      stack.push(string[i]);
    } else if (closingBrackets.includes(string[i])) {
      if (stack.length === 0) {
        return false;
      } else if (stack[stack.length - 1] === matchingBrackets.get(string[i])) {
        stack.pop();
      }
    } else {
      return false;
    }
  }
  return stack.length === 0
    ? "Balanced set of brackets"
    : "Not-Balanced set of brackets";
}
