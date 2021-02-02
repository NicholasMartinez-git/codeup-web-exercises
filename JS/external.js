"use strict";
console.log("Hello from external Javascript");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color");
alert("Great, " + favoriteColor + " is my favorite too!");

function rentMovies() {
    var littleMermaid = prompt("How long will you be renting Little Mermaid?");
    var brotherBear = prompt("How long will you be renting Brother Bear?");
    var hercules = prompt("How long will you be renting Hercules?");
    var priceMovie = 3.00;
    var pay = (littleMermaid * priceMovie) + (brotherBear * priceMovie) + (hercules * priceMovie);
    var result = confirm("Thank you! Your total amount is " + pay.toFixed(2) + " (Press Ok to continue)");
    return result;
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