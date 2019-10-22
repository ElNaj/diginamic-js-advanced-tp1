const axios = require('axios');
let Planet = require('./planet');

let tabPlanet = [];

let promesse = new Promise ((resolve, reject) => {

    axios.get('https://swapi.co/api/planets/')
    .then((response) => {

        let resultsPla = response.data.results;

        resultsPla.forEach(planet => {
            
            tabPlanet.push(new Planet(planet));
        });
        resolve(tabPlanet);
    })
    .catch(function(error) {
        console.log(error);
    })
});

promesse.then((data) => {

    tabPlanet.forEach(planet => {
        console.log("Planet : " + planet.name + " - Population : " + planet.population);
    });
    console.log("\nPopulation totale : " + Planet.countPlanetsPopulation(data));
})

