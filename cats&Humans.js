function catsHumans(legs) {
  const peopleCount = [];
  if (legs === 2) {
    return [1];
  }
  while (legs >= 0) {
    peopleCount.unshift(legs / 2);
    legs -= 4;
  }
  return peopleCount;
}

console.log(catsHumans(14));
