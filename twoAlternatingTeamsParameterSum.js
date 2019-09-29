function twoAlternatingTeamsParameterSum(dataArray) {
  let team1sum = null,
      team2sum = null;
  for (let i = 0; i < dataArray.length; i++) {
    if (i % 2 === 0) {
      team2sum += dataArray[i];
    } else {
      team1sum += dataArray[i];
    }    
  }
  return [team1sum, team2sum];
}

console.log(twoAlternatingTeamsParameterSum([80,75,67,102,78,99]));