"use strict";

(function () {
    function showMultiplicationTable(number) {
        for (var i = 1; i <= 10; i++) {
            var result = number * i;
            console.log(number + " x " + i + " = " + result);
        }
        return console.log("Here is the table you requested!");
    }
    showMultiplicationTable(7);
    
    function generate10RandomNumbers() {
        for (var i = 0; i < 10; i++) {
            var randomNumber = Math.floor((Math.random() * 200) + 20);
            if (randomNumber % 2 === 0) {
                console.log(randomNumber + " is even.");
            } else {
                console.log(randomNumber + " is odd.");
            }
        }
    }
    generate10RandomNumbers()
})();

