function uberFanciestRide(travelDist, fares) {
  const rides = ['UberX','UberXL','UberPlus','UberBlack','UberSUV'];

  for(let i = fares.length - 1; i >= 0; i--) {
    if (fares[i] * travelDist <= 20) {
      return rides[i]
    }
  }
}

console.log(uberFanciestRide(30, [0.3,0.5,0.7,1,1.3])); // UberXL - have a great ride