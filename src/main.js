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

        let earthYear = earth.calculateYears(user.age, userLifeExpectancy, earth.year);
        let mercuryYear = mercury.calculateYears(user.age, userLifeExpectancy, mercury.year);
        let venusYear = venus.calculateYears(user.age, userLifeExpectancy, venus.year);
        let marsYear = mars.calculateYears(user.age, userLifeExpectancy, mars.year);
        let jupiterYear = jupiter.calculateYears(user.age, userLifeExpectancy, jupiter.year);

        $('#earthInfo').text(`Your age in Earth years is ${earthYear[0]} years old! ... Obviously.`);
        $('#earthLifeInfo').text(`Your remaining life expectancy on Earth in years is ${earthYear[1]} years!`);
        $('#mercuryInfo').text(`Your age in Mercury years is ${mercuryYear[0]} years old!`);
        $('#mercuryLifeInfo').text(`Your remaining life expectancy on Mercury in years is ${mercuryYear[1]} years!`);
        $('#venusInfo').text(`Your age in Venus years is ${venusYear[0]} years old!`);
        $('#venusLifeInfo').text(`Your remaining life expectancy on Venus in years is ${venusYear[1]} years!`);
        $('#marsInfo').text(`Your age in Mars years is ${marsYear[0]} years old!`);
        $('#marsLifeInfo').text(`Your remaining life expectancy on Mars in years is ${marsYear[1]} years!`);
        $('#jupiterInfo').text(`Your age in Jupiter years is ${jupiterYear[0]} years old!`);
        $('#jupiterLifeInfo').prepend(`Your remaining life expectancy on Jupiter in years is ${jupiterYear[1]} years!`);
    });


});