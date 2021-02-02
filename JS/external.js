"use strict";
console.log("Hello from external Javascript");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color");
alert("Great, " + favoriteColor + " is my favorite too!");

function rentMovies() {
    var littleMermaid = prompt("How long will you be renting Little Mermaid?");
    console.log(littleMermaid);
    var brotherBear = prompt("How long will you be renting Brother Bear?");
    console.log(brotherBear);
    var hercules = prompt("How long will you be renting Hercules?");
    console.log(hercules);
    var priceMovie = 3.00;
    var pay = (littleMermaid * priceMovie) + (brotherBear * priceMovie) + (hercules * priceMovie);
    console.log(pay);
    alert("Thank you! Your total amount is " + pay.toFixed(2));
}
console.log(rentMovies());

alert("Thank you for shopping with us");

function weeklyPayment() {
    var googleHourlyPay = 400.00;
    var amazonHourlyPay = 380.00;
    var facebookHourlyPay = 350.00;
    var googleHoursWorked = prompt("How many hours did you work for google?");
    console.log(googleHoursWorked);
    var amazonHoursWorked = prompt("How many hours did you work for Amazon?");
    console.log(amazonHoursWorked);
    var facebookHoursWorked = prompt("How many hours did you work for Facebook?");
    console.log(facebookHoursWorked);
    var pay = (googleHoursWorked * googleHourlyPay) + (amazonHoursWorked * amazonHourlyPay) + (facebookHoursWorked * facebookHourlyPay)
    console.log(pay);
    alert("Your payment for this week is " + pay.toFixed(2));
}
console.log(weeklyPayment());

var name = prompt("What is your name?");
console.log("Hello, " + name);
alert("Please answer the following questions to determine if you can enroll into this class.");

var isNotFull = confirm("Does the class counter show 29/29");
console.log(isNotFull);
var notScheduleConflict = confirm("Does the time slot for this class overlap any already enrolled class?");
console.log(notScheduleConflict);
alert("Enrollment answer: " + (isNotFull && notScheduleConflict) + " (If true, you may enroll. If you false, you may not enroll.)")
