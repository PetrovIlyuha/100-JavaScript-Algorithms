// * Given array of integers representing coordinates of obstacles situated on a straight line
// * Assume that you are jumping from the point with coordinate 0 to the right. You are
// * allowed only to make jumps of the same length represented by some integer value
// * Find the minimal length of the jump enough to avoid all the obstacles

function avoidObstacles(obstaclesArray) {
  obstaclesArray = obstaclesArray.sort((a,b) => a - b);
  const largestArrayVal = obstaclesArray[obstaclesArray.length - 1];

  for (let i = 1; i <= largestArrayVal + 1; i++) {
    if(obstaclesArray.every((element) => element % i !== 0)) {
      return i;
    }
  }  
}

console.log(avoidObstacles([5,3,6,9,7]));

// * Case Solution = 4
// * ---__1---__2---O3---__4---O5---O6---O7---__8---O9---u10