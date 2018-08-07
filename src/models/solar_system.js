const PubSub = require('../helpers/pub_sub.js');


const SolarSystem = function (planets) {
  this.planets = planets;
};


SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('SolarSystem:all-planets-ready', this.planets);

  PubSub.subscribe(`SelectView:planet-selected`, (evt) => {
    const planetName = evt.detail;
    const selectedPlanet = this.findPlanetByName(planetName);
    PubSub.publish(`SolarSystem:selected-planet`, selectedPlanet);
  });
};

SolarSystem.prototype.findPlanetByName = function (planetName) {
  return this.planets.find(planet => {
    return planet.name === planetName;
  });
};


module.exports = SolarSystem;
