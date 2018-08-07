const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (planetNav) {
  this.planetNav = planetNav;
}

SelectView.prototype.bindEvents = function () {
  this.planetNav.addEventListener('click', (event) => {
    const selectedPlanetName = event.target.id;
    PubSub.publish(`SelectView:planet-selected`, selectedPlanetName);
  });
};

module.exports = SelectView;
