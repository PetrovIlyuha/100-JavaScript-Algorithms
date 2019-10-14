function electionWinner(votes, k) {
  let inTheRunning = 0;
  const mostVotes = Math.max(...votes);
  const sortedVotes = votes.sort((a,b) => b - a)
  if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
    return 1;
  }

  votes.forEach((voteCount) => {
    if (mostVotes - voteCount < k) {
      inTheRunning++;
    }
  })
  return inTheRunning;
}

console.log(electionWinner([1,2,3,4],4))

