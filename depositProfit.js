function depositProfit(deposit, rate, threshold) {
  let year = 0;
  let account = deposit;

  while (threshold > account) {
    account += account * (rate/100);
    year++;
      }
   return year;
}

console.log(depositProfit(10000, 11, 15000)) // Output: 4 years