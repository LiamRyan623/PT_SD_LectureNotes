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
    - Does not destroy the origional array
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

// .filter with .includeds, remove any fruit with "p"

const filterFruit2 = fruits.filter((item) => !item.includes("P"))
console.log(filterFruit2);

const filteredFruitsFunctionEx = fruits.filter(eatMango);

// returns true if not mango, false if mango
function eatMango(fruits) {
    return fruits !== "mango";
}

console.log("Filtered with function ex: ", filteredFruitsFunctionEx);