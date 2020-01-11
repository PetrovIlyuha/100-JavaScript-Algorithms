function growPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let totalHeight = 0;
  while (totalHeight < desiredHeight) {
    days++;
    totalHeight += upSpeed;

    if (totalHeight < desiredHeight) {
      totalHeight -= downSpeed;
    }
  }
  return days;
}

console.log(growPlant(100, 10, 910));
