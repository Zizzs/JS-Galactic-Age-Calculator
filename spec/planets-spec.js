


describe('RPG', function () {

    let userAge = 0;
    afterEach(function () {
        userAge = 0;
    });
    it('returns users age in Earth years', function () {
        userAge = 50
        let earthYear = 1;
        expect(earthYears(userAge, earthYear)).toEqual(50);
    });

    it('returns users age in Mercury years', function () {
        userAge = 50
        let mercuryYear = .24;
        expect(mercuryYears(userAge, mercuryYear)).toEqual(208);
    });

    it('returns users age in Venus years', function () {
        userAge = 50
        let venusYear = .62;
        expect(venusYears(userAge, venusYear)).toEqual(80);
    });

    it('returns users age in Mars years', function () {
        userAge = 50
        let marsYear = .62;
        expect(marsYears(userAge, marsYear)).toEqual(26);
    });

    it('returns users age in Jupiter years', function () {
        userAge = 50
        let jupiterYear = .62;
        expect(jupiterYears(userAge, jupiterYear)).toEqual(4);
    });
});