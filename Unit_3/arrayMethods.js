// ? Array Methods, awesome ways to do things with or to arrays

let food = ["Potatoes", "cheeseburger", "steak", "cheese"];

//for(item of food){
//    console.log(item);
//}

//* . push(), adds item to the end of an array.
food.push("pizza")
console.log("Push method ", food);

//* .splice(), splice(indices of where to remove, how many to remove, what to replace with/add)
food.splice(0, 1, "baked potatoes")
console.log("Splice method: ", food)

food.splice(1, 0, "sushi");
console.log("Second Splice Method: ", food);

// * .pop() Removes a value from the end of an array.
food.pop();
console.log("Pop method: ", food);

//* .shift(), removes the first value of an array.(Value in first position)

food.shift();
console.log("Shift method: food");

//* .unshift(), adds to the front an array. Can include multiple items.
food.unshift("cake", "sushi", "roti");
console.log("Unshift Method: ", food);

//* .toString(), returns a string representation of the array.
let rgb = ["red", "green", "blue"]
console.log("toString Method: ", rgb.toString());

//? iteration Methods

/* 
?    .filter() and .includes()
    - Does not destroy the original array
    - we typically store the filter array in a new variable
    - takes a callback function that returns either true or false.
        - A callback function is another function that we invoke within our main function.
    - loops through array
    - MUST have a return
*/

let fruits = ["Kumquat", "Banana", "Plum", "Kiwi", "Watermelon", "mango"];

//use filter to remove plum
//let filteredFruit = fruits.filter(fruit => {
//    let remainingFruit = fruit !== "Plum"
//    console.log(`Remaining Fruit: ${remainingFruit}`);
//    return remainingFruit;
//})

//console.log(filteredFruit);


// .includes(), remove any fruit with "p" .includes done on one item at a time(single value at a time.)
console.log("Includes Method: ", fruits.includes("p"));

// .filter with .includes, remove any fruit with "p"

const filterFruit2 = fruits.filter((item) => !item.includes("P"))
console.log(filterFruit2);

const filteredFruitsFunctionEx = fruits.filter(eatMango);

// returns true if not mango, false if mango
function eatMango(fruits) {
    return fruits !== "mango";
}

console.log("Filtered with function ex: ", filteredFruitsFunctionEx);


//------------------------------------

//? /forEach()
/* 
    Runs 3 arguments:
        - The Value
        - The Index
        - The Array object itself

    - forEach() helps us iterate over an array performinga function once per element in the array via a callback function.
    - Is not executed for empty elements
    - Does not change the original array
*/

let newFoodList = ["apple", "pear", "mushrooms", "cheese", "spagett"];

//for (let i = 0; i < newFoodList.length; i++){
//    console.log(newFoodList[i]);
//}

//newFoodList.forEach((item) => console.log("ForEach Method: ", item));


// arrow function with block body
//newFoodList.forEach((item, i) => {
//    console.log("ForEach with Index: ", item, i)
//})

//newFoodList.forEach(function (item) {
//    console.log("Declaration sample: ", item)
//})




// Build a function to console.log item

function displayFoodItem(foodThing) {
    console.log(`Function outside of forEach: ${foodThing}.`);
}
//function call
//displayFoodItem("potato")

// Pass our forEach method the function
newFoodList.forEach(displayFoodItem);

//---------------------------------------------
//? .map()
/* 
    - Creates a new array from calling a function for every array element
    - Calls the function once per element in an array
    - Does not execute the function for empty elements 
    - Does not change the original array.
*/


// Populated by for loop
let numArray = [];

// Populate by using .map on numArray
let fizzBuzzArray = [];

for (let k = 0; k <= 25; k++) {
    numArray.push(k)
}

//console.log(numArray);
//checking if numArray was populated

// Simple ex first
//numArray.map((x) => fizzBuzzArray.push(x));
//numArray.map((x) => fizzBuzzArray.push(x + 5));

// if % by 3 print fizz, if % by 5 print buss if % by 3 and 5 print # (push to fizzBuzzArray)
numArray.map((x) => {
    // Use a conditional to check division.
    if (x % 15 === 0) {
        fizzBuzzArray.push(x);
    } else if (x % 3 === 0) {
        fizzBuzzArray.push("Fizz")
    } else if (x % 5 === 0) {
        fizzBuzzArray.push("Buzz");
    }
})

//check if fizzBuzzArray populated
console.log(fizzBuzzArray)

//?---------------- map vs forEach example -------------

let mainArr = [1, 2, 3, 4];

// .forEach does NOT return anything, performs an action on each item, does not return a value
let forEachEx = mainArr.forEach((i) => i);
console.log("forEachEx: ", forEachEx);

// .map returns a new array, perfoms an action and creates/returns a new value
let mapEx = mainArr.map((i) => i);
console.log("mapEx: ", mapEx);

let secondMap = mapEx.map((i) => i + 5);
console.log("SecondMap Ex: ", secondMap);

//--------------------------------------------------
//? .find()

let tmnt = ["Mikey", "Donnie", "Leo", "Raph", "Splinter", "Shredder", "Baxter"];

let character = "Leo";
console.log(
    "Find ex 1: ",
    tmnt.find((c) => c === character)
);

character = "April";
console.log(
    "Find ex 2: ",
    tmnt.find((c) => c === character)
);

/* 
  - Executes a function for each array element and returns the value of the first element that passes a test.
  - Returns undefined if no elements are found.
  - Does not execute the function for empty elements.
  - Does not change the original array.
*/

character = "Splinter"; // Find will return true for splinter versus the value splinter because we checked all items via including the index
console.log(
    "Find ex 2: ",
    tmnt.find((c, i) => c console.log(
        "Character: ", 
        c === character,
        "Index: ",
        i
    ))
);