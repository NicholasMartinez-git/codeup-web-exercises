"use strict";

// Javascript with HTML exercises

/* All the console.log() is to confirm expressions are working properly
and to find possible errors to debug
*/

// Exercise 1 => Question 6
console.log("Hello from external Javascript");

// Exercise 2 => Question 1
alert("Welcome to my Website!");

// Exercise 2 => Question 2
var favoriteColor = prompt("What is your favorite color");
alert("Great, " + favoriteColor + " is my favorite too!");

// Exercise 2 => Question 3 => Bulletin 1 (previous lesson)
var littleMermaid = parseInt(prompt("How long will you be renting Little Mermaid?"));
console.log(littleMermaid);
var brotherBear = parseInt(prompt("How long will you be renting Brother Bear?"));
console.log(brotherBear);
var hercules = parseInt(prompt("How long will you be renting Hercules?"));
console.log(hercules);
var priceMovie = 3.00;
var pay = (littleMermaid + brotherBear + hercules) * priceMovie;
console.log(pay);
alert("Thank you! Your total amount is " + pay.toFixed(2));

// Exercise 2 => Question 3 => Bulletin 2 (previous lesson)
var googleHourlyPay = 400.00; // Hourly rate for each company
var amazonHourlyPay = 380.00; //""
var facebookHourlyPay = 350.00; //""
var googleHoursWorked = Number(prompt("How many hours did you work for google?"));
console.log(googleHoursWorked);
var amazonHoursWorked = Number(prompt("How many hours did you work for Amazon?"));
console.log(amazonHoursWorked);
var facebookHoursWorked = Number(prompt("How many hours did you work for Facebook?"));
console.log(facebookHoursWorked);
var totalPay = (googleHoursWorked * googleHourlyPay) + (amazonHoursWorked * amazonHourlyPay) + (facebookHoursWorked * facebookHourlyPay)
console.log(totalPay);
alert("Your total payment for this week is $" + totalPay.toFixed(2));

// Exercise 2 => Question 3 => Bulletin 3 (previous lesson)
var name = prompt("What is your name?");
alert("Hello, " + name + " \nPlease answer the following questions to determine if you can enroll into this class.");
var isNotFull = confirm("Does the class counter show 29/29"); // Hypothetical question to make statement true or false
console.log(isNotFull);
var notScheduleConflict = confirm("Does the time slot for this class overlap any already enrolled class?");
console.log(notScheduleConflict);
alert("Enrollment answer: " + (isNotFull && notScheduleConflict) + " \n(If true, you may enroll. If you false, you may not enroll.)")

// Exercise 2 => Question 3 => Bulletin 4 (previous lesson)
var premium = confirm("Are you a premium member?");
console.log(premium);
var product = prompt("How much of the product are you buying?");
console.log(product);
var productNotExpired = confirm("Is the product not expired?");
console.log(productNotExpired);
var productOffer = ((product >= 2) && productNotExpired); // Checks if the user qualifies
console.log(productOffer);
var premiumOffer = ((product >= 1) && productNotExpired); // Checks if the user qualifies as a premium member
console.log(premiumOffer);
alert("Qualification for Non-Premium Member: " + productOffer + " \nQualification for Premium Member: " + premiumOffer + " \n(If true, you qualify. If you false, you don't qualify.)")




