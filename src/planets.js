export class PlanetYears {
    constructor(year) {
        this.year = year;
    }

    calculateYears(age, lifeExpectancy, planetYear) {
        debugger;
        const remainingLife = Math.floor((lifeExpectancy - age) / planetYear);
        const userAge = Math.floor(age / planetYear);
        const arr = [userAge, remainingLife];
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