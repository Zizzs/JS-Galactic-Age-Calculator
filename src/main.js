import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from './js/user';
import { Mercury, Venus, Mars, Jupiter, Earth, Naboo, Kashyyk } from './js/planets';

let root = document.getElementsByTagName('body');
document.addEventListener('resize', () => {
    root.style.setProperty('--screen-x', window.screenX);
    root.style.setProperty('--screen-y', window.screenY);
})

$(document).ready(function () {

    $('#userForm').submit(function (event) {
        event.preventDefault();
        const userName = $('#userName').val();
        const currentDay = new Date();
        const userBirthday = new Date($('#userAge').val());
        const userCountry = $('#userCountry').val();
        const userEat = $('#userEat').val();
        const userExercise = $('#userExercise').val();
        const userDog = $('#userDog').val();
        const currentYear = currentDay.getFullYear();
        const userBirthYear = userBirthday.getFullYear();
        let user = new User(userName, userBirthday, currentDay);
        user.age = currentYear - userBirthYear;
        user.lifeExpectancy = 60;
        if (userCountry === "yes")
            user.lifeExpectancy += 10;
        if (userEat === "yes")
            user.lifeExpectancy += 10;
        if (userExercise === "yes")
            user.lifeExpectancy += 10;
        if (userDog === "yes")
            user.age *= 7;
        console.log(currentYear);
        console.log(userBirthYear);
        const mercury = new Mercury();
        const venus = new Venus();
        const earth = new Earth();
        const mars = new Mars();
        const jupiter = new Jupiter();
        const naboo = new Naboo();
        const kashyyk = new Kashyyk();
        

        if (user.age - user.lifeExpectancy > 0) {
            user.excessYears = (user.age - user.lifeExpectancy);
        }
        else {
            user.excessYears = 0;
        }

        let earthYear = earth.calculateYears(user.age, user.lifeExpectancy, user.excessYears, earth.year);
        let mercuryYear = mercury.calculateYears(user.age, user.lifeExpectancy, user.excessYears, mercury.year);
        let venusYear = venus.calculateYears(user.age, user.lifeExpectancy, user.excessYears, venus.year);
        let marsYear = mars.calculateYears(user.age, user.lifeExpectancy, user.excessYears, mars.year);
        let jupiterYear = jupiter.calculateYears(user.age, user.lifeExpectancy, user.excessYears, jupiter.year);
        let nabooYear = naboo.calculateYears(user.age, user.lifeExpectancy, user.excessYears, naboo.year);
        let kashyykYear = kashyyk.calculateYears(user.age, user.lifeExpectancy, user.excessYears, kashyyk.year);

        $('#earthInfo').text(`Your age in Earth years is ${earthYear[0]} years old! ... Obviously.`);
        $('#mercuryInfo').text(`Your age in Mercury years is ${mercuryYear[0]} years old!`);
        $('#venusInfo').text(`Your age in Venus years is ${venusYear[0]} years old!`);
        $('#marsInfo').text(`Your age in Mars years is ${marsYear[0]} years old!`);
        $('#jupiterInfo').text(`Your age in Jupiter years is ${jupiterYear[0]} years old!`);
        $('#nabooInfo').text(`Your age in Naboo years is ${nabooYear[0]} years old!`);
        $('#kashyykInfo').text(`Your age in Kashyyk years is ${kashyykYear[0]} years old!`);
        if (user.excessYears === 0) {
            $('#earthLifeInfo').text(`Your remaining life expectancy on Earth in years is ${earthYear[1]} years!`);
            $('#mercuryLifeInfo').text(`Your remaining life expectancy on Mercury in years is ${mercuryYear[1]} years!`);
            $('#venusLifeInfo').text(`Your remaining life expectancy on Venus in years is ${venusYear[1]} years!`);
            $('#marsLifeInfo').text(`Your remaining life expectancy on Mars in years is ${marsYear[1]} years!`);
            $('#jupiterLifeInfo').text(`Your remaining life expectancy on Jupiter in years is ${jupiterYear[1]} years!`);
            $('#nabooLifeInfo').text(`Your remaining life expectancy on Naboo in years is ${nabooYear[1]} years!`);
            $('#kashyykLifeInfo').text(`Your remaining life expectancy on Kashyyk in years is ${kashyykYear[1]} years!`);
        }
        else {
            $('#earthLifeInfo').text(`You have lived ${earthYear[2]} Earth years beyond your life expectancy.`);
            $('#mercuryLifeInfo').text(`You have lived ${mercuryYear[2]} Mercury years beyond your life expectancy.`);
            $('#venusLifeInfo').text(`You have lived ${venusYear[2]} Venus years beyond your life expectancy.`);
            $('#marsLifeInfo').text(`You have lived ${marsYear[2]} Mars years beyond your life expectancy.`);
            $('#jupiterLifeInfo').text(`You have lived ${jupiterYear[2]} Jupiter years beyond your life expectancy.`);
            $('#nabooLifeInfo').text(`Your remaining life expectancy on Naboo in years is ${nabooYear[1]} years!`);
            $('#kashyykLifeInfo').text(`Your remaining life expectancy on Kashyyk in years is ${kashyykYear[1]} years!`);
        }

        $('#outputAlert').text("Your information has been calculated.");
    });


});