import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { User } from './user';
//import { Mercury, Venus, Mars, Jupiter, Earth } from './planets';





$(document).ready(function (event) {
    event.preventDefault();

    $('#userForm').submit(function (event) {
        event.preventDefault();
        //const userName = $('#userName').val();
        //const userAge = parseInt($('#userAge').val());
        //let user = new User(userName, userAge);
        //let mercury = new Mercury(.24);
        //let venus = new Venus(.62);
        //let earth = new Earth(1);
        //let mars = new Mars(1.88);
        //let jupiter = new Jupiter(11.86);

        //const earthYear = earth.calculateEarthYears(userAge);
        //const mercuryYear = mercury.calculateMercuryYears(userAge);
        //const venusYear = venus.calculateVenusYears(userAge);
        //const marsYear = mars.calculateMarsYears(userAge);
        //const jupiterYear = jupiter.calculateJupiterYears(userAge);

    });


});