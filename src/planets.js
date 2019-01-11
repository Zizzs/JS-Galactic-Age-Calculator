export class PlanetYears {
    constructor(year) {
        this.year = year;
    }
}

export class Earth extends PlanetYears {
    constructor() {
        super(1);
    }

    calculateEarthYears(age) {
        return age;
    }
}

export class Mercury extends PlanetYears {
    constructor() {
        super(.24);
    }

    calculateMercuryYears(age, mercuryYear) {
        let mercuryAge = Math.floor(age / mercuryYear);
        return mercuryAge;
    }
}

export class Venus extends PlanetYears {
    constructor() {
        super(.62);
    }

    calculateVenusYears(age, venusYear) {
        let venusAge = Math.floor(age / venusYear);
        return venusAge;
    }
}

export class Mars extends PlanetYears {
    constructor() {
        super(1.88);
    }

    calculateMarsYears(age, marsYear) {
        let marsAge = Math.floor(age / marsYear);
        return marsAge;
    }
}

export class Jupiter extends PlanetYears {
    constructor() {
        super(11.86);
    }

    calculateJupiterYears(age, jupiterYear) {
        let jupiterAge = Math.floor(age / jupiterYear);
        return jupiterAge;
    }
}