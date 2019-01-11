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
        let user = new User(userName, userAge);
        let mercury = new Mercury(.24);
        let venus = new Venus(.62);
        let earth = new Earth(1);
        let mars = new Mars(1.88);
        let jupiter = new Jupiter(11.86);

        let earthYear = earth.calculateEarthYears(user.age);
        let mercuryYear = mercury.calculateMercuryYears(user.age, mercury.year);
        let venusYear = venus.calculateVenusYears(user.age, venus.year);
        let marsYear = mars.calculateMarsYears(user.age, mars.year);
        let jupiterYear = jupiter.calculateJupiterYears(user.age, jupiter.year);

        $('#earthInfo').text(`Your age in Earth years is ${earthYear} years old! ... Obviously.`);
        $('#mercuryInfo').text(`Your age in Mercury years is ${mercuryYear} years old!`);
        $('#venusInfo').text(`Your age in Venus years is ${venusYear} years old!`);
        $('#marsInfo').text(`Your age in Mars years is ${marsYear} years old!`);
        $('#jupiterInfo').text(`Your age in Jupiter years is ${jupiterYear} years old!`);
    });


});