function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile){
  const fareCost = [];
  for (let i = 0; i < cost_per_minute.length; i++){
    fareCost.push(Math.floor(ride_time * cost_per_minute[i] + ride_distance * cost_per_mile[i]))
  }
  return fareCost
}

console.log(fareEstimator(40, 8, [0.2, 0.3, 0.4, 0.5], [1.2, 1.5, 1.9, 2.2]));