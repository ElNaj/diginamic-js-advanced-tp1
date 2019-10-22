module.exports = class Planet {

    constructor({name, population}) {

        this.name = name;

        if (population !== 'unknown') {
            
            this.population = parseInt(population);
        }
        if (population === 'unknown') {

            this.population = 0;
        }

    }

    // Méthode statique
    static countPlanetsPopulation(listPlanet) {
        
        let sommePop = listPlanet.reduce((a, b) => a + b.population, 0);
        return sommePop;
    }
}




