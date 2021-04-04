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
var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
function firstAndSecond(sqnc) {
    return [first(sqnc), second(sqnc)];
}

// OR

function firstAndSecond(sqnc) {
    return sqnc.slice(0, 2);
}

// Exercise 58
function firstAndLast(sqnc) {
    return [first(sqnc), last(sqnc)];
}

// Exercise 59
function firstToLast(sqnc) {
    sqnc.push(sqnc.shift());
    return sqnc;
}

// Exercise 60
function isANumberOrStringNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}
function sumAll(sqnc) {
    var sum = 0;

    for (var i = 0; i < sqnc.length; i++) {

        if (!isANumberOrStringNumber(sqnc[i])) {
            sqnc[i] = 0;
        }

        sum += parseFloat(sqnc[i]);
    }

    return sum;
}

// Exercise 61
function mean(sqnc) {
    var mean = sumAll(sqnc) / sqnc.length;
    return mean;
}

// Exercise 62
function median(sqnc) {

    var onlyNumSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i])) {
            onlyNumSqnc.push(sqnc[i]);
        }
    }

    onlyNumSqnc.sort(function(a, b) {
        return a - b;
    });

    var mid = Math.floor(onlyNumSqnc.length / 2);

    if(onlyNumSqnc.length % 2 !== 0) {
        return onlyNumSqnc[mid];
    } else {
        return (onlyNumSqnc[mid -1] + onlyNumSqnc[mid]) / 2.0
    }
}

// Exercise 63
function maxMinusMin(array) {

    var onlyNumArray = [];

    for (var i = 0; i < array.length; i++) {

        if (isANumberOrStringNumber(array[i])) {
            onlyNumArray.push(array[i]);
        }
    }

    onlyNumArray.sort(function(a, b) {
        return a - b;
    });

    return onlyNumArray[onlyNumArray.length - 1] - onlyNumArray[0];
}

// Exercise 64
function productOfAll(sqnc) {

    var onlyNumSqnc = [];
    var sum = 1;

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i])) {
            onlyNumSqnc.push(sqnc[i]);
        }
        sum *= parseFloat(onlyNumSqnc[i]);
    }

    return sum;
}

// Exercise 65
function getHighestNumber(sqnc) {
    var onlyNumSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i])) {
            onlyNumSqnc.push(sqnc[i]);
        }

    }
    return Math.max(...onlyNumSqnc);
}

// Or

function getHighestNumber(sqnc) {
    var onlyNumSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i])) {
            onlyNumSqnc.push(sqnc[i]);
        }

    }

    onlyNumSqnc.sort(function(a,b){
        return a-b;
    });

    return onlyNumSqnc[onlyNumSqnc.length-1];
}

// Exercise 66 ---> Could also use the Math.min() to find the smallest number within the onlyNumSqnc[]
function getSmallestNumber(sqnc) {
    var onlyNumSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i])) {
            onlyNumSqnc.push(sqnc[i]);
        }

    }

    onlyNumSqnc.sort(function(a,b){
        return a-b;
    });

    return onlyNumSqnc[0];
}

// Exercise 67
function onlyOddNumbers(sqnc) {
    var onlyNumAndOddSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isOdd(sqnc[i])) {
            onlyNumAndOddSqnc.push(sqnc[i]);
        }
    }

    return onlyNumAndOddSqnc;
}

// Exercise 68
function onlyEvenNumbers(sqnc) {
    var onlyNumAndEvenSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isEven(sqnc[i])) {
            onlyNumAndEvenSqnc.push(sqnc[i]);
        }
    }

    return onlyNumAndEvenSqnc;
}

// Exercise 69
function onlyPositiveNumbers(sqnc) {
    var onlyNumAndPositiveSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isPositive(sqnc[i])) {
            onlyNumAndPositiveSqnc.push(sqnc[i]);
        }
    }

    return onlyNumAndPositiveSqnc;
}

// Exercise 70
function onlyNegativeNumbers(sqnc) {
    var onlyNumAndNegativeSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isNegative(sqnc[i])) {
            onlyNumAndNegativeSqnc.push(sqnc[i]);
        }
    }

    return onlyNumAndNegativeSqnc;
}

// Exercise 71
function hasEvens(sqnc) {
    var onlyNumSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i])) {
            onlyNumSqnc.push(sqnc[i]);
        }
    }

    return onlyNumSqnc.some(isEven)
}

// Exercise 72
function countEvens(sqnc) {
    var count = 0;

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isEven(sqnc[i])) {
            count++;
        }
    }

    return count;
}

// Exercise 73
function hasOdds(sqnc) {
    var onlyNumSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i])) {
            onlyNumSqnc.push(sqnc[i]);
        }
    }

    return onlyNumSqnc.some(isOdd)
}

// Exercise 74
function countOdds(sqnc) {
    var count = 0;

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isOdd(sqnc[i])) {
            count++;
        }
    }

    return count;
}

// Exercise 75
function countNegatives(sqnc) {
    var count = 0;

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isNegative(sqnc[i])) {
            count++;
        }
    }

    return count;
}


// Exercise 76
function countPositives(sqnc) {
    var count = 0;

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isPositive(sqnc[i])) {
            count++;
        }
    }

    return count;
}

// Exercise 77
function onlyPositiveEvens(sqnc) {
    var onlyNumAndPositiveSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isPositive(sqnc[i]) && isEven(sqnc[i])) {
            onlyNumAndPositiveSqnc.push(sqnc[i]);
        }
    }

    return onlyNumAndPositiveSqnc;
}

// Exercise 78
function onlyPositiveOdds(sqnc) {
    var onlyNumAndPositiveAndOddSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isPositive(sqnc[i]) && isOdd(sqnc[i])) {
            onlyNumAndPositiveAndOddSqnc.push(sqnc[i]);
        }
    }

    return onlyNumAndPositiveAndOddSqnc;
}

// Exercise 79
function onlyNegativeEvens(sqnc) {
    var onlyNumAndNegativeAndEvenSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isNegative(sqnc[i]) && isEven(sqnc[i])) {
            onlyNumAndNegativeAndEvenSqnc.push(sqnc[i]);
        }
    }

    return onlyNumAndNegativeAndEvenSqnc;
}

// Exercise 80
function onlyNegativeOdds(sqnc) {
    var onlyNumAndNegativeAndOddSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isNegative(sqnc[i]) && isOdd(sqnc[i])) {
            onlyNumAndNegativeAndOddSqnc.push(sqnc[i]);
        }
    }

    return onlyNumAndNegativeAndOddSqnc;
}

// Exercise 81
function isString(input) {
    return typeof input === "string";
}
function shortestString(array) {
    var onlyStringsAndNumericStrings = []
    for (var i = 0; i < array.length; i++) {
        if (isString(array[i])) {
            onlyStringsAndNumericStrings.push(array[i]);
        }
    }

    return onlyStringsAndNumericStrings.reduce(function(previousString, currentString) {
        if (currentString.length < previousString.length) {

            return currentString;
        } else {
            return previousString;
        }
    })
}

// Exercise 82
function longestString(array) {
    var onlyStringsAndNumericStrings = []
    for (var i = 0; i < array.length; i++) {
        if (isString(array[i])) {
            onlyStringsAndNumericStrings.push(array[i]);
        }
    }

    return onlyStringsAndNumericStrings.reduce(function(previousString, currentString) {
        if (currentString.length > previousString.length) {

            return currentString;
        } else {
            return previousString;
        }
    })
}

// Exercise 83
function getUniqueValues(array) {
    var onlyStringsAndNumericStrings = []
    for (var i = 0; i < array.length; i++) {
        if (isString(array[i])) {
            onlyStringsAndNumericStrings.push(array[i]);
        }
    }

    var uniqueStrings = onlyStringsAndNumericStrings.filter(function (string, index) {
        return onlyStringsAndNumericStrings.indexOf(string) === index;
    })

    return uniqueStrings;
}

// Exercise 84
function elementsTimesTwo(array) {

    var onlyNumOrNumStrings = [];

    for (var i = 0; i < array.length; i++) {
        if (isANumberOrStringNumber(array[i])) {
            onlyNumOrNumStrings.push(array[i]);
        }
    }

    var ETT = [];

    for (var j = 0; j < onlyNumOrNumStrings.length; j++) {
        ETT.push(onlyNumOrNumStrings[j] * 2);
    }

    return ETT;
}

// Exercise 85
function flatten(array) {
    var flatArray = array.flat(array.length);
    return flatArray;
}

// Exercise 86
function addOneToArray(array) {

    for (var i = 0; i < array.length; i++) {

        if (typeof array[i] === 'number' && isFinite(array[i])) {

            array[i] = array[i] + 1;

        }

    }

    return array;
}


// Working with JS Objects

// The following objects
const tukeyPaper = {
    "title": "The Future of Data Analysis",
    "author": "John W. Tukey",
    "link": "https://projecteuclid.org/euclid.aoms/1177704711",
    "year_published": 1962
}

const thomasPaper = {
    "title": "A mathematical model of glutathione metabolism",
    "author": "Rachel Thomas",
    "link": "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
    "year_published": 2008
}

// Exercise 87
function getPaperTitle(object) {
    return object.title;
}

// Exercise 88
function getYearPublished(object) {
    return object.year_published;
}

// this code defines a JS object with information about a book.
const book = {
    "title": "Genetic Algorithms and Machine Learning for Programmers",
    "price": 36.99,
    "author": "Frances Buontempo"
}

// Exercise 89
function getPrice(object) {
    return object.price;
}

// Exercise 90
function getBookAuthor(object) {
    return object.author;
}

const books = [
    {
        "title": "Genetic Algorithms and Machine Learning for Programmers",
        "price": 36.99,
        "author": "Frances Buontempo"
    },
    {
        "title": "The Visual Display of Quantitative Information",
        "price": 38.00,
        "author": "Edward Tufte"
    },
    {
        "title": "Practical Object-Oriented Design",
        "author": "Sandi Metz",
        "price": 30.47
    },
    {
        "title": "Weapons of Math Destruction",
        "author": "Cathy O'Neil",
        "price": 17.44
    }
]

// Exercise 91
function getNumberOfBooks(books) {
    return books.length;
}

// Exercise 92
function totalOfBookPrices(books) {
    var sum = 0;
    for (var i = 0; i < books.length; i++) {
        sum = sum + books[i].price;
    }
    return sum;
}

// Exercise 93
function getAverageBookPrice(books) {
    var sum = 0;

    for (var i = 0; i < books.length; i++) {
        sum = sum + books[i].price;
    }
    var average = sum / books.length;

    return average;
}

// Exercise 94

function mostExpensive(books) {
    return books.sort((a, b) => b.price - a.price);
}

function highestPriceBook(books) {
    return mostExpensive(books)[0];
}
