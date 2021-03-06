export class PlanetYears {
    constructor(year) {
        this.year = year;
    }

    calculateYears(age, lifeExpectancy, excessYears, planetYear) {
        let excess;
        const remainingLife = Math.floor((lifeExpectancy - age) / planetYear);
        const userAge = Math.floor(age / planetYear);
        if (excessYears !== 0) {
            excess = Math.floor(excessYears / planetYear);
        }
        else {
            excess = "You have not lived beyond your life expectancy."
        }
        const arr = [userAge, remainingLife, excess];
        return arr;
    }
}

export class Earth extends PlanetYears {
    constructor() {
        super(1);
    }
}

export class Mercury extends PlanetYears {
    constructor() {
        super(.24);
    }
}

export class Venus extends PlanetYears {
    constructor() {
        super(.62);
    }
}

export class Mars extends PlanetYears {
    constructor() {
        super(1.88);
    }
}

export class Jupiter extends PlanetYears {
    constructor() {
        super(11.86);
    }
}

export class Naboo extends PlanetYears {
    constructor() {
        super(.85);
    }
}

export class Kashyyk extends PlanetYears {
    constructor() {
        super(1.3);
    }
}