function composeRanges(nums) {
  if(nums.length < 1) {
    return [];
  }
  const ranges = [{start: nums[0], end: nums[0]}];

  for (let i = 1; i < nums.length; i++) {
    if (ranges[ranges.length - 1].end + 1 === nums[i]) {
      ranges[ranges.length - 1].end = nums[i];
    } else {
      ranges.push({start: nums[i], end: nums[i]});
    }
  }
  for (let i = 0; i < ranges.length; i++) {
    if (ranges[i].start !== ranges[i].end) {
      ranges[i] = `${ranges[i].start} -> ${ranges[i].end}`
    } else {
      ranges[i] = ranges[i].start.toString();
    }
  }
  return ranges;
}


console.log(composeRanges([-4,-3,-2,0,1,2,4,7,8,9,12,13,14,15,45]));