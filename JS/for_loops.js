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
})();

