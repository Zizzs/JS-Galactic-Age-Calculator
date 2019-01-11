import { Earth, Mercury, Venus, Mars, Jupiter, Naboo, Kashyyk } from "../src/js/planets";



describe('PlanetYears', function () {

    let userAge = 50;
    let lifeExpectancy = 90;
    let excess = 0;

    it('returns users age and remaining life expectancy in Earth years', function () {
        const earth = new Earth();
        expect(earth.calculateYears(userAge, lifeExpectancy, excess, earth.year)).toEqual([50, 40, "You have not lived beyond your life expectancy."]);
    });

    it('returns users age in remaining life expectancy Mercury years', function () {
        const mercury = new Mercury();
        expect(mercury.calculateYears(userAge, lifeExpectancy, excess, mercury.year)).toEqual([208, 166, "You have not lived beyond your life expectancy."]);
    });

    it('returns users age in remaining life expectancy Venus years', function () {
        const venus = new Venus();
        expect(venus.calculateYears(userAge, lifeExpectancy, excess, venus.year)).toEqual([80, 64, "You have not lived beyond your life expectancy."]);
    });

    it('returns users age in remaining life expectancy Mars years', function () {
        const mars = new Mars();
        expect(mars.calculateYears(userAge, lifeExpectancy, excess, mars.year)).toEqual([26, 21, "You have not lived beyond your life expectancy."]);
    });

    it('returns users age in remaining life expectancy Jupiter years', function () {
        const jupiter = new Jupiter();
        expect(jupiter.calculateYears(userAge, lifeExpectancy, excess, jupiter.year)).toEqual([4, 3, "You have not lived beyond your life expectancy."]);
    });

    it('returns users age in remaining life expectancy Naboo years', function () {
        const naboo = new Naboo();
        expect(naboo.calculateYears(userAge, lifeExpectancy, excess, naboo.year)).toEqual([58, 47, "You have not lived beyond your life expectancy."]);
    });

    it('returns users age in remaining life expectancy Kashyyk years', function () {
        const kashyyk = new Kashyyk();
        expect(kashyyk.calculateYears(userAge, lifeExpectancy, excess, kashyyk.year)).toEqual([38, 30, "You have not lived beyond your life expectancy."]);
    });
});