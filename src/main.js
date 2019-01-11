import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from './user';
import { Mercury, Venus, Mars, Jupiter, Earth } from './planets';





$(document).ready(function () {


    $('#userForm').submit(function (event) {
        event.preventDefault();
        const userName = $('#userName').val();
        const userAge = parseInt($('#userAge').val());
        const userCountry = $('#userCountry').val();
        const userEat = $('#userEat').val();
        const userExercise = $('#userExercise').val();
        let userLifeExpectancy = 60;
        if (userCountry === "yes")
            userLifeExpectancy += 10;
        if (userEat === "yes")
            userLifeExpectancy += 10;
        if (userExercise === "yes")
            userLifeExpectancy += 10;
        let user = new User(userName, userAge);
        let mercury = new Mercury(.24);
        let venus = new Venus(.62);
        let earth = new Earth(1);
        let mars = new Mars(1.88);
        let jupiter = new Jupiter(11.86);
        let userExcessYears;

        if (userAge - userLifeExpectancy > 0) {
            userExcessYears = (userAge - userLifeExpectancy);
        }
        else {
            userExcessYears = 0;
        }

        let earthYear = earth.calculateYears(user.age, userLifeExpectancy, userExcessYears, earth.year);
        let mercuryYear = mercury.calculateYears(user.age, userLifeExpectancy, userExcessYears, mercury.year);
        let venusYear = venus.calculateYears(user.age, userLifeExpectancy, userExcessYears, venus.year);
        let marsYear = mars.calculateYears(user.age, userLifeExpectancy, userExcessYears, mars.year);
        let jupiterYear = jupiter.calculateYears(user.age, userLifeExpectancy, userExcessYears, jupiter.year);

        $('#earthInfo').text(`Your age in Earth years is ${earthYear[0]} years old! ... Obviously.`);
        $('#mercuryInfo').text(`Your age in Mercury years is ${mercuryYear[0]} years old!`);
        $('#venusInfo').text(`Your age in Venus years is ${venusYear[0]} years old!`);
        $('#marsInfo').text(`Your age in Mars years is ${marsYear[0]} years old!`);
        $('#jupiterInfo').text(`Your age in Jupiter years is ${jupiterYear[0]} years old!`);
        if (userExcessYears === 0) {
            $('#earthLifeInfo').text(`Your remaining life expectancy on Earth in years is ${earthYear[1]} years!`);
            $('#mercuryLifeInfo').text(`Your remaining life expectancy on Mercury in years is ${mercuryYear[1]} years!`);
            $('#venusLifeInfo').text(`Your remaining life expectancy on Venus in years is ${venusYear[1]} years!`);
            $('#marsLifeInfo').text(`Your remaining life expectancy on Mars in years is ${marsYear[1]} years!`);
            $('#jupiterLifeInfo').text(`Your remaining life expectancy on Jupiter in years is ${jupiterYear[1]} years!`);
        }
        else {
            $('#earthLifeInfo').text(`You have lived ${earthYear[2]} Earth years beyond your life expectancy.`);
            $('#mercuryLifeInfo').text(`You have lived ${mercuryYear[2]} Mercury years beyond your life expectancy.`);
            $('#venusLifeInfo').text(`You have lived ${venusYear[2]} Venus years beyond your life expectancy.`);
            $('#marsLifeInfo').text(`You have lived ${marsYear[2]} Mars years beyond your life expectancy.`);
            $('#jupiterLifeInfo').text(`You have lived ${jupiterYear[2]} Jupiter years beyond your life expectancy.`);
        }
    });


});