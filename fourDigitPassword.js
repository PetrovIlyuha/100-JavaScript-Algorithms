function fourDigitPassword(passcode, attempts) {
  let failedAttempts = 0;
  for (let attempt of attempts) {
    if (attempt !== passcode) failedAttempts++;
  }
  if (failedAttempts === attempts.length)
    return "Your access had been blocked...";
  return "Access Granted";
}

console.log(fourDigitPassword("1111", ["1112", "1111", "4112"]));
