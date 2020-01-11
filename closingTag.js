function closingTag(startTag) {
  let separatedAttributes = startTag.split(" ");
  let firstTag = separatedAttributes[0].toString().split("");
  let endTag = "</";
  for (let i = 1; i < firstTag.length; i++) {
    endTag += firstTag[i];
  }
  return (endTag += ">");
}

console.log(closingTag("<button type='button' disabled>")); // </button>
console.log(closingTag("<img src='https://pixabay.com/1234' alt='something'>")); // </img>
