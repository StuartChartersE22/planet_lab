const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');
const PlanetDetailView = require('./views/planet_detail_view.js')


document.addEventListener('DOMContentLoaded', () => {

  const selectPlanet = document.querySelector('ol.planets-menu');
  const selectView = new SelectView(selectPlanet);
  selectView.bindEvents();

  const planetDetailSection = document.querySelector(`section.planet-details`);
  const planetDetailView = new PlanetDetailView(planetDetailSection);
  planetDetailView.bindEvents();

  const solarSystem = new SolarSystem(planetsData);
  solarSystem.bindEvents();
});



// const infoDiv = document.querySelector('div#animal-info')
// const animalInfoDisplay = new AnimalInfoView(infoDiv);
// animalInfoDisplay.bindEvents();
