(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Nicholas",
        lastName: "Martinez"
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    };
    person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {
        var discount = .12;
        var amountBefore = shopper.amount;
        var amountAfter = amountBefore - (discount * amountBefore);
        if (amountBefore >= 200) {
            console.log("Hello, " + shopper.name + "! " + "You've spent over " + "$" + amountBefore.toFixed(2) + " so you receive a %12 discount! You're new amount after the discount comes out to be " + "$" + amountAfter.toFixed(2));
        } else {
            console.log("Hello, " + shopper.name + "! " + "You're total is $" + amountBefore.toFixed(2))
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "The Golden Compass (Series)",
            author: {
                firstName: "Philip",
                lastName: "Pullman"
            }
        },
        {
            title: "The Book Thief",
            author: {
                firstName: "Markus",
                lastName: "Zusak"
            }
        },
        {
            title: "Supermarket",
            author: {
                firstName: "Bobby",
                lastName: "Hall"
            }
        },
        {
            title: "The Kite Runner",
            author: {
                firstName: "Khaled",
                lastName: "Hosseini"
            }
        },
        {
            title: "The Obstacle Is The Way",
            author: {
                firstName: "Ryan",
                lastName: "Holiday"
            }
        }
    ]
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    console.log(books.length);
    for (var i = 0; i < books.length; i++) {
        console.log("Book # " + (i + 1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
        console.log("---");
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var storedBooks = [];


    var askToStoreBookInfo = confirm("Would you like to store your books information?")

    if (askToStoreBookInfo) {
        var numOfStoredBooks = parseInt(prompt("How many books information would you like to store?"));
    } else {
        alert("Maybe next time!");
    }



    while (numOfStoredBooks > 0) {
        storedBooks.push(createBook());
        numOfStoredBooks--;
    }

    function createBook(title, author) {
        title = prompt("What is the name of the title?");
        author = prompt("What is the first and last name of the author?").split(" ");

        return {
            title: title,
            author: {
                firstName: author[0],
                lastName: author[1]
            }
        };
    }

    console.log(storedBooks);


    storedBooks.forEach(showBookInfo);

    function showBookInfo(book, i) {
        console.log("Book # " + (i + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    }

})();