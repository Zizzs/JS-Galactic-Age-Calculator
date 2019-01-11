import { Earth, Mercury, Venus, Mars, Jupiter } from "../src/planets";



describe('PlanetYears', function () {

    let userAge = 50;
    let lifeExpectancy = 90

    it('returns users age in Earth years', function () {
        const earth = new Earth();
        expect(earth.calculateYears(userAge, lifeExpectancy, earth.year)).toEqual([50, 40]);
    });

    it('returns users age in Mercury years', function () {
        const mercury = new Mercury();
        expect(mercury.calculateYears(userAge, lifeExpectancy, mercury.year)).toEqual([208, 166]);
    });

    it('returns users age in Venus years', function () {
        const venus = new Venus();
        expect(venus.calculateYears(userAge, lifeExpectancy, venus.year)).toEqual([80, 64]);
    });

    it('returns users age in Mars years', function () {
        const mars = new Mars();
        expect(mars.calculateYears(userAge, lifeExpectancy, mars.year)).toEqual([26, 21]);
    });

    it('returns users age in Jupiter years', function () {
        const jupiter = new Jupiter();
        expect(jupiter.calculateYears(userAge, lifeExpectancy, jupiter.year)).toEqual([4, 3]);
    });
});