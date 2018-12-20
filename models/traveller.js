const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allModes = this.journeys.map((journey) => {
    return journey.transport;
  });
  return uniqueModes = [...new Set(allModes)]
}

//   return[...new Set(this.journeys.map((journey) => {
//     return journey.transport;
//   }))]
// };


// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let uniqueList = [];
//   this.journeys.forEach((journey) => {
//     if (!uniqueList.includes(journey.transport)){
//       uniqueList.push(journey.transport)
//     }
//   });
//   return uniqueList;
// }
//
//
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let transportAllTypes = this.journeys.map((journey) => {
//     return journey.transport;
//   })
//   return transportAllTypes.filter(function(value, index, self){
//     return self.indexOf(value) === index;
//   });
// };

module.exports = Traveller;
