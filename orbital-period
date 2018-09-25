/*
Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on http://en.wikipedia.org/wiki/Orbital_period

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  const orbitalArr = arr.map(item => {
    const period = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3)/GM);
    console.log(Number.parseFloat(period).toFixed(0));
    return {name: item.name, orbitalPeriod: Number(period.toFixed(0))};
  });
  return orbitalArr;
}

const answer = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

console.log(answer);
