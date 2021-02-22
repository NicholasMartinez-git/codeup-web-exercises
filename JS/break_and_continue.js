"use strict";

(function () {
    // Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
    // Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
    // Your output should look like this:
    //
    //
    // Number to skip is: 27
    //
    // Here is an odd number: 1
    // Here is an odd number: 3
    // Here is an odd number: 5
    // Here is an odd number: 7
    // Here is an odd number: 9
    // Here is an odd number: 11
    // Here is an odd number: 13
    // Here is an odd number: 15
    // Here is an odd number: 17
    // Here is an odd number: 19
    // Here is an odd number: 21
    // Here is an odd number: 23
    // Here is an odd number: 25
    // Yikes! Skipping number: 27
    // Here is an odd number: 29
    // Here is an odd number: 31
    // Here is an odd number: 33
    // Here is an odd number: 35
    // Here is an odd number: 37
    // Here is an odd number: 39
    // Here is an odd number: 41
    // Here is an odd number: 43
    // Here is an odd number: 45
    // Here is an odd number: 47
    // Here is an odd number: 49

    function breakAndContinue(input) {
        // prompting user for number between 1 and 50
        // var askNum = parseInt(prompt("Please enter an odd number between 1 and 50: "));
        //
        // // recursive function method. Was initially  my first choice for making this "loop" to work. INCOMPLETE!
        // if (isBetweenANumber1And50AndOdd(askNum)) {
        //     alert("Sorry! Invalid number please try again!");
        //     breakAndContinue();
        // } else {
        //     console.log("Number to skip is: " + askNum);
        // }

        // This is alternative method using a for loop. INCOMPLETE!
        // for (true; true; true) {
        //     var askNum = parseInt(prompt("Please enter an odd number between 1 and 50: "));
        //     if (isBetweenANumber1And50(askNum)|| askNum % 2 === 0) {
        //         break;
        //     }
        // }

        // This would have been the best choice for this problem
        // Completed version
        do {
            var askNum = parseInt(prompt("Please enter an odd number between 1 and 50: "));

        } while (isBetweenANumber1And50AndOdd(askNum));
        console.log("Number to skip is: " + askNum);

        for (var i = 1; (i >= 1 && i <= 50); i += 2) {
            if (i === askNum) {
                console.log("Yikes! Skipping Number: " + i);
            } else {
                console.log("Here is an odd number: " + i);
            }
        }
    }

    // This is a pure function to call upon for making the code above look prettier.
    function isBetweenANumber1And50AndOdd(input) {
       return (((input < 1 || input > 50) || isNaN(input)) || input % 2 === 0)
    }

    // Calling my function to run the code inside it.
    breakAndContinue();


    // Create a method is a number between which takes in 3 inputs, (min/max) or (floor/ceiling) and value to check.
})();
