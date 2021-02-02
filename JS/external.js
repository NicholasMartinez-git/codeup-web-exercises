"use strict";
console.log("Hello from external Javascript");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color");
alert("Great, " + favoriteColor + " is my favorite too!");


var littleMermaid = parseInt(prompt("How long will you be renting Little Mermaid?"));
console.log(littleMermaid);
var brotherBear = parseInt(prompt("How long will you be renting Brother Bear?"));
console.log(brotherBear);
var hercules = parseInt(prompt("How long will you be renting Hercules?"));
console.log(hercules);
var priceMovie = 3.00;
var pay = (littleMermaid + brotherBear + hercules) * 3;
console.log(pay);
alert("Thank you! Your total amount is " + pay.toFixed(2));


alert("Thank you for shopping with us");


var googleHourlyPay = 400.00;
var amazonHourlyPay = 380.00;
var facebookHourlyPay = 350.00;
var googleHoursWorked = Number(prompt("How many hours did you work for google?"));
console.log(googleHoursWorked);
var amazonHoursWorked = Number(prompt("How many hours did you work for Amazon?"));
console.log(amazonHoursWorked);
var facebookHoursWorked = Number(prompt("How many hours did you work for Facebook?"));
console.log(facebookHoursWorked);
var totalPay = (googleHoursWorked * googleHourlyPay) + (amazonHoursWorked * amazonHourlyPay) + (facebookHoursWorked * facebookHourlyPay)
console.log(totalPay);
alert("Your total payment for this week is $" + totalPay.toFixed(2));


var name = prompt("What is your name?");
console.log("Hello, " + name);
alert("Please answer the following questions to determine if you can enroll into this class.");

var isNotFull = confirm("Does the class counter show 29/29");
console.log(isNotFull);
var notScheduleConflict = confirm("Does the time slot for this class overlap any already enrolled class?");
console.log(notScheduleConflict);
alert("Enrollment answer: " + (isNotFull && notScheduleConflict) + " \n(If true, you may enroll. If you false, you may not enroll.)")
// Question 3: B4
var premium = confirm("Are you a premium member?");
console.log(premium);
var product = prompt("How much of the product are you buying?");
console.log(product);
var productNotExpired = confirm("Is the product not expired?");
console.log(productNotExpired);
var productOffer = ((product >= 2) && productNotExpired);
console.log(productOffer);
var premiumOffer = ((product >= 1) && productNotExpired);
console.log(premiumOffer);
alert("Qualification for Non-Premium Member: " + productOffer + " \nQualification for Premium Member: " + premiumOffer + " \n(If true, you qualify. If you false, you don't qualify.)")
