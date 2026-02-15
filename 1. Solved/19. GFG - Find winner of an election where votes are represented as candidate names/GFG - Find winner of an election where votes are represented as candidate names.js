function election(candidates) {
  let votes = {};
  for (let candidate of candidates) {
    votes[candidate] ? votes[candidate]++ : (votes[candidate] = 1);
  }
  let maxVote = Math.max(...Object.values(votes));
  let winners = [];
  for (let winner in votes) {
    if (votes[winner] === maxVote) {
      winners.push(winner);
    }
  }
  return winners.sort()[0];
}

console.log(election(["abc", "abc", "bc", "bc", "c"]));
