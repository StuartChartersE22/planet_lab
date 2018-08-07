const PubSub = require('../helpers/pub_sub.js');

const PlanetDetailView = function (container) {
  this.container = container;
};

PlanetDetailView.prototype.bindEvents = function(){
  PubSub.subscribe(`SolarSystem:selected-planet`, (evt) => {
    const planet = evt.detail;
    this.render(planet);
  });

  PlanetDetailView.prototype.render = function (planet) {
    this.emptyDetails();
    addPlanetName(planet, this.container);
    addPlanetImage(planet, this.container);
    addPlanetDetails(planet, this.container);
  };
};

PlanetDetailView.prototype.emptyDetails = function () {
  this.container.innerHTML = ` `;
};

module.exports = PlanetDetailView;

function addPlanetName(planet, container) {
  const name = document.createElement(`h3`);
  name.classList.add(`planet-name`);
  name.textContent = planet.name;
  container.appendChild(name);
};

function addPlanetImage(planet, container) {
  const image = document.createElement(`img`);
  image.classList.add(`planet-image`);
  image.src = planet.image;
  container.appendChild(image);
};

function addPlanetDetails(planet, container) {
  const details = document.createElement(`ul`);
  details.classList.add(`planet-facts`);
  for(let detail of Object.keys(planet)){
    if(detail !== 'name' && detail !== `image`){
      console.dir(detail);
      const displayDetail = document.createElement(`li`);
      displayDetail.textContent = `${detail}: ${planet[detail]}`
      details.appendChild(displayDetail);
    };
  };
  container.appendChild(details);
};
