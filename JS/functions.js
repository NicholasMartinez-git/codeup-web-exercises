(function () {
    "use strict";


// Exercise (1)
    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */
    function sayHello(name) {
        return console.log("Hello, " + name);
    }

    sayHello("codeup!");

// Exercise (2)
    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */
    var helloMessage = sayHello("Nicholas");
    console.log(helloMessage);

// Exercise (3)
    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */
    var myName = "Nicholas";
    sayHello(myName);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);


// Exercise (4)
    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */
    function isTwo(num) {
        return num === 2;
    }

    console.log(isTwo(1));
    console.log(isTwo(2));
    console.log(isTwo(3));
    console.log(isTwo(random));

// Exercise (5) & (6) are combined
    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.375
     * > calculateTip(0.15, 33.42) // returns 5.013
     */
    function calculateTip(tipPercentage, bill) {
        var percentFormula = (tipPercentage / 100);
        console.log(percentFormula);
        return percentFormula * bill;
    }

    console.log(calculateTip(20, 20.00));
    console.log(calculateTip(25, 25.50));
    console.log(calculateTip(15, 33.42));

//Exercise (6)
    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */
    var askTipPercentage = Number(prompt("What percentage would you like to tip?")).toFixed(2);
    console.log(askTipPercentage);
    var askBill = Number(prompt("What is the total amount of the bill?")).toFixed(2);
    console.log(askBill);
    alert("Requested tip amount is $" + (calculateTip(askTipPercentage, askBill)).toFixed(2));

// Exercise (7)
    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var discountPercent = .2; // 20%
     * > applyDiscount(originalPrice, discountPercent) // 80
     *
     * > applyDiscount(45.99, 0.12) // 40.4712
     */
    var originalPrice = (Number(prompt("What is the cost of the item you wish to purchase?"))).toFixed(2);
    console.log(originalPrice);
    var discountPercentage = (Number(prompt("What is the percentage of the discount you wish to apply to your purchase?"))).toFixed(2);
    console.log(discountPercentage);

    function applyDiscount(originalPrice, discountPercentage) {
        var percentageFormula = (discountPercentage / 100)
        var discountAmount = originalPrice * percentageFormula;
        console.log(discountAmount);
        var result = originalPrice - discountAmount;
        console.log(result);
        return result;
    }

    applyDiscount(originalPrice, discountPercentage);
})();
