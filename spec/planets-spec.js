import { Earth, Mercury, Venus, Mars, Jupiter } from "../src/planets";



describe('RPG', function () {

    let userAge = 0;
    afterEach(function () {
        userAge = 0;
    });
    it('returns users age in Earth years', function () {
        userAge = 50
        const earth = new Earth();
        expect(earth.calculateEarthYears(userAge, earth.year)).toEqual(50);
    });

    it('returns users age in Mercury years', function () {
        userAge = 50
        const mercury = new Mercury();
        expect(mercury.calculateMercuryYears(userAge, mercury.year)).toEqual(208);
    });

    it('returns users age in Venus years', function () {
        userAge = 50
        const venus = new Venus();
        expect(venus.calculateVenusYears(userAge, venus.year)).toEqual(80);
    });

    it('returns users age in Mars years', function () {
        userAge = 50
        const mars = new Mars();
        expect(mars.calculateMarsYears(userAge, mars.year)).toEqual(26);
    });

    it('returns users age in Jupiter years', function () {
        userAge = 50
        const jupiter = new Jupiter();
        expect(jupiter.calculateJupiterYears(userAge, jupiter.year)).toEqual(4);
    });
});