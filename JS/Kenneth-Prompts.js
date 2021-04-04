// Write a function named calculateTax that takes in two inputs representing the
// totalPaid and the taxPercent. If both inputs are numeric or numeric strings,
// calculateTax should return the total with tax added in a string looking like:
// "$XX.XX". If either or both inputs are not numeric or numeric strings, calculateTax
// should return false.

// calculateTax(25, 8)				 // "$27.00"
// calculateTax(10, 12)             // "$11.20"
// calculateTax(120, 15.5)			 //	"$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax("Codeup", 100)      // false
// calculateTax()                   // false


// Write a function named countPosi that accepts an array of numbers and returns the number of positive numbers in the array.

// countPosi([-2, 7, 4, -9, 1]) //3
// countPosi([3, 6, 9, -1]) //3
// countPosi([10]) //1
function isANumberOrStringNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

function isPositive(number) {
    return number > 0;
}

function countPosi(sqnc) {
    var onlyNumAndPositiveSqnc = [];

    for (var i = 0; i < sqnc.length; i++) {

        if (isANumberOrStringNumber(sqnc[i]) && isPositive(sqnc[i])) {
            onlyNumAndPositiveSqnc.push(sqnc[i]);
        }
    }

    return onlyNumAndPositiveSqnc.length;
}

console.log(countPosi());

// Write a function named printRecipe that accepts a recipe object. A recipe object will have properties of title (a string), servings (a number), and ingredients (an array of strings). printRecipe will console.log each property in this format:
// Example object:
//     var caldoRecipe = {name: "Caldo con Pollo", servings: 4, ingredients: ["whole chicken", "carrots", "cabbage", "potatoes", "jalapeno", "cilantro", "salt", "pepper", "cumin", "onion powder", "garlic powder"]}
// Expected look in console from running printRecipe(caldoRecipe):
// Caldo con Pollo
// Serves: 4
// Required ingredients: whole chicken, carrots, cabbage, potatoes, jalapeno, cilantro, salt, pepper, cumin, onion powder, garlic powder

function printRecipe(object) {
    var storedRecipes = [];


    var askToStoreRecipeInfo = confirm("Would you like to store your recipe's information?")

    if (askToStoreRecipeInfo) {
        var numOfStoredRecipes = parseInt(prompt("How many recipes would you like to store?"));
    } else {
        alert("Maybe next time!");
    }



    while (numOfStoredRecipes > 0) {
        storedRecipes.push(createRecipe());
        numOfStoredRecipes--;
    }

    function createRecipe(title, servings, ingredients) {
        title = prompt("What is the title of the recipe?");
        servings = prompt("How many serving per recipe use?")
        ingredients = prompt("What are the ingredients of this recipe?").split(",");

        return {
            title: title,
            servings: servings,
            ingredients: ingredients
        };
    }

    console.log(storedRecipes);


    storedRecipes.forEach(showRecipeInfo);

    function showRecipeInfo(recipe, i) {
        console.log("Recipe # " + (i + 1));
        console.log("Title: " + recipe.title);
        console.log("Servings: " + recipe.servings);
        console.log("Ingredients: " + recipe.ingredients)
        console.log("---");
    }
}

// Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
// convertAddressToObject('8626 Sunny Oaks') // {streetNumber: '8646', streetName: 'Sunny Oaks'}
// convertAddressToObject('5408 Villa Nueva') // {streetNumber: '5408', streetName: 'Villa Nueva'}
// Collapse