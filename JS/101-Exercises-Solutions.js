// These are the solutions for all 101 Exercises for glitch.com/edit/#!/slime-toothsome-giraffe?path=101-exercises.js%3A43%3A20

// Exercise 1
var onMarsRightNow = false;

// Exercise 2
var fruits = ["mango", "banana", "guava", "kiwi", "strawberry"];

// Exercise 3
var vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"];

// Exercise 4
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exercise 5
fruits.push("tomato");

// Exercise 6
vegetables.push("tomato");

// Exercise 7
someNumbers.reverse();

// Exercise 8
vegetables.sort();

// Exercise 9
fruits.reverse(fruits.sort());

// Exercise 10
var fruitsAndVeggies = fruits.concat(vegetables);

// Exercise 11
function addOne(number) {
    return number + 1;
}

// Exercise 12
function isPositive(number) {
    return number > 0;
}

// Exercise 13
function isNegative(number) {
    return number < 0;
}

// Exercise 14
function isOdd(number) {
    return number % 2 !== 0;
}

// Exercise 15
function isEven(number) {
    return number % 2 === 0;
}

// Exercise 16
function identity(input) {
    return input;
}

// Exercise 17
function isPositiveOdd(number) {
    return ((number % 2 !== 0) && number > 0);
}

// Exercise 18
function isPositiveEven(number) {
    return ((number % 2 === 0) && number > 0);
}

// Exercise 19
function isNegativeOdd(number) {
    return ((number % 2 !== 0) && number < 0);
}

// Exercise 20
function isNegativeEven(number) {
    return ((number % 2 === 0) && number < 0);
}

// Exercise 21
function half(number) {
    return number / 2;
}

// Exercise 22
function double(number) {
    return number * 2;
}

// Exercise 23
function triple(number) {
    return number * 3;
}

// Exercise 24
function reverseSign(number) {
    return number * (-1);
}

// Exercise 25
function absoluteValue(number) {
    return Math.abs(number);
}

// Exercise 26
function isMultipleOfThree(number) {
    return (number % 3 === 0);
}

// Exercise 27
function isMultipleOfFive(number) {
    return (number % 5 === 0);
}

// Exercise 28
function isMultipleOfBothThreeAndFive(number) {
    return (number % 5 === 0) && (number % 3 === 0);
}

// Exercise 29
function square(number) {
    return number * number;
}

// Exercise 30
function add(num1, num2) {
    return num1 + num2;
}

// Exercise 31
function cube(number) {
    return Math.pow(number, 3);
}

// Exercise 32
function squareRoot(number) {
    return Math.pow(number, .5);
}

// Exercise 33
function subtract(num1, num2) {
    return num1 - num2;
}

// Exercise 34
function multiply(num1, num2) {
    return num1 * num2;
}

// Exercise 35
function divide(num1, num2) {
    return (num1 / num2);
}

// Exercise 36
function quotient(num1, num2) {
    return Math.floor(num1/num2);
}

// Exercise 37
function remainder(num1, num2) {
    return num1 % num2;
}

// Exercise 38
function sumOfSquares(num1, num2) {
    return Math.pow(num1, 2) + Math.pow(num2, 2);
}

// Exercise 39
function timesTwoPlusThree(number) {
    return (number * 2) + 3;
}

// Exercise 40
function areaOfRectangle(num1, num2) {
    var length = num1;
    var width = num2;

    return length * width;
}

// Exercise 41
function areaOfCircle(number) {
    return Math.PI * Math.pow(number, 2);
}

// Exercise 42
function circumference(number) {
    return 2 * Math.PI * number;
}

// Exercise 43
function isVowel(value) {
    value = value.toLowerCase();
    if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u") {
        return true;
    } else {
        return false;
    }
}

// OR ********************

function isVowel(value) {
  value = value.toLowerCase();
  return ((["a", "e", "i", "o", "u"].indexOf(value)) != -1)
}

// Exercise 44
function hasVowels(value) {
    value = value.toLowerCase();
    return value.includes("a") || value.includes("e")|| value.includes("i") || value.includes("o") || value.includes("u");
}

// Exercise 45
function countVowels(value) {
    var count = 0;
    for (var i = 0; i < value.length; i++) {

        var char = value[i];

        if (hasVowels(char)) {
            count++;
        }
    }

    return count;
}

// Exercise 46
function removeVowels(value) {

    var charArray = value.split("");

    for (var i = 0; i < charArray.length; i++) {

        if (hasVowels(charArray[i])) {
            charArray[i] = "";
        }
    }

    return charArray.join("");
}

// Exercise 47
function startsWithVowel(string) {
    string = string.toLowerCase();
    var char = string.charAt(0);
    if (hasVowels(char)) {
        return true;
    } else {
        return false;
    }
}

// OR

function startsWithVowel(string) {
  string = string.toLowerCase();
  var char = string.charAt(0);
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  } else {
    return false;
  }
}

// Exercise 48
function endsWithVowel(string) {
    string = string.toLowerCase();
    var char = string.charAt(string.length - 1);
    if (hasVowels(char)) {
        return true;
    } else {
        return false;
    }
}

// Exercise 49
function startsAndEndsWithVowel(string) {
    if ((startsWithVowel(string) && endsWithVowel(string))) {
        return true;
    } else {
        return false;
    }
}

// Exercise 50
function first(sqnc) {
    return sqnc[0];
}

// Exercise 51
function second(sqnc) {
    return sqnc[1];
}

// Exercise 52
function third(sqnc) {
    return sqnc[2];
}

// Exercise 53
function forth(sqnc) {
    return sqnc[3]
}

// Exercise 54
function last(sqnc) {
    return sqnc[sqnc.length - 1];
}

// Exercise 55
function secondToLast(sqnc) {
    return sqnc[sqnc.length -2];
}

// Exercise 56
function thirdToLast(sqnc) {
    return sqnc[sqnc.length - 3];
}

// Exercise 57