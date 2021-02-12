"use strict";

(function () {
    // Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
    //
    // For example, showMultiplicationTable(7) should output
    //
    //
    // 7 x 1 = 7
    // 7 x 2 = 14
    // 7 x 3 = 21
    // 7 x 4 = 28
    // 7 x 5 = 35
    // 7 x 6 = 42
    // 7 x 7 = 49
    // 7 x 8 = 56
    // 7 x 9 = 63
    // 7 x 10 = 70

    function showMultiplicationTable(number) {
        for (var i = 1; i <= 10; i++) {
            var result = number * i;
            console.log(number + " x " + i + " = " + result);
        }
        return console.log("Here is the table you requested!");
    }
    showMultiplicationTable(7);

    //Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
    //
    //
    // 123 is odd
    // 80 is even
    // 24 is even
    // 199 is odd
    // ...
    
    function generate10RandomNumbers() {
        for (var i = 0; i < 10; i++) {
            var randomNumber = Math.floor((Math.random() * (201 - 20)) + 20);
            if (randomNumber % 2 === 0) {
                console.log(randomNumber + " is even.");
            } else {
                console.log(randomNumber + " is odd.");
            }
        }
    }
    generate10RandomNumbers()

    // Create a for loop that uses console.log to create the output shown below.
    //
    //
    // 1
    // 22
    // 333
    // 4444
    // 55555
    // 666666
    // 7777777
    // 88888888
    // 999999999

    function numberTriangle(input) {
        for (var i = 1; i <= 9; i++) {
            var emptyString = ""; //store the number concatenated for the number i
            for (var j = 1; j <= i; j++) {
                emptyString += i.toString();
            }
            console.log(emptyString);
        }
    }
    numberTriangle();

    // Create a for loop that uses console.log to create the output shown below.
    //
    //
    // 100
    // 95
    // 90
    // 85
    // 80
    // 75
    // 70
    // 65
    // 60
    // 55
    // 50
    // 45
    // 40
    // 35
    // 30
    // 25
    // 20
    // 15
    // 10
    // 5

    function decrementByFive(input) {
        for (var i = 100; i > 0; i = i - 5) {
            console.log(i);
        }
    }
    decrementByFive();


})();

