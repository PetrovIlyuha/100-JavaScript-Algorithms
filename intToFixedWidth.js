function intToFixedWidth(number, width) {
  let stringifiedNum = number.toString();
  const numberWidth = stringifiedNum.length;
  if (numberWidth < width) {
    const widthDiff = width - numberWidth;
    let padStart = "";

    for (let i = 0; i < widthDiff; i++) {
      padStart = padStart.concat("0");
    }
    return padStart.concat(stringifiedNum);
  }

  return stringifiedNum;
}

console.log(intToFixedWidth(112, 10));
