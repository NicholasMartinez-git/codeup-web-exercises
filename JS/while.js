"use strict";

(function () {
    // Create a while loop that uses console.log() to create the output shown below.
    //
    //
    // 2
    // 4
    // 8
    // 16
    // 32
    // 64
    // 128
    // 256
    // 512
    // 1024
    // 2048
    // 4096
    // 8192
    // 16384
    // 32768
    // 65536

    function doubleUp(input) {
        var i = 2;
        while (i < 65536) {
            i = i * 2
            console.log(i)
        }
    }
    doubleUp();

    // An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.
    //
    //
    // // This is how you get a random number between 50 and 100
    // var allCones = Math.floor(Math.random() * 50) + 50;
    // // This expression will generate a random number between 1 and 5
    // Math.floor(Math.random() * 5) + 1;
    // The output should be similar to the following:
    //
    // 5 cones sold...  // if there are enough cones
    // Cannot sell you 6 cones I only have 3...  // If there are not enough cones
    // Yay! I sold them all! // If there are no more cone

    function iceCreamSeller(input) {
        var allCones = Math.floor(Math.random() * 50) + 50; // All the cones in inventory

        // Show the amount of cones left after each customer buys there amount until there is no more inventory left.
        do {
            var conesSold = Math.floor(Math.random() * 5) + 1;
            console.log("I have " + allCones + " remaining cones.");


            if ((allCones - conesSold) >= 0) {
                allCones = allCones - conesSold;
                console.log(conesSold + " cones sold...")
            } else {
                console.log("Sorry I cant sell you " + conesSold + " I only have " + allCones + " left.");
                var remainingCones = confirm("Would you like to buy the remaining " + allCones + " cones?");
                if (remainingCones) {
                    allCones = 0;
                    console.log("Thank you for buying the last of my cones!");
                } else {
                    console.log("Sorry! I couldn't accommodate you.");
                }
            }

        } while (allCones > 0)
        console.log("Yay! I sold all my cones!");
    }
    iceCreamSeller();
})();