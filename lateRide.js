function lateRide(timerData) {
  let hours = Math.floor(timerData / 60);
  let minutes = timerData % 60;
  let stringifiedMinutes = minutes.toString();
  let stringifiedHours = hours.toString();
  if (hours < 10) {
    hours = "0".concat(stringifiedHours);
  }
  if (stringifiedMinutes < 10) {
    minutes = "0".concat(stringifiedMinutes);
    console.log(minutes);
  }
  return hours.concat(":", minutes);
}

console.log(lateRide(490));
