/* 
    ? Unit 2: Data Structures.
    - How we organize our Data.
    - Utilize arrays and objects and use functions to interact with them.

    ? Array
    - Denoted with square brackets []
    - The indices start at zero 
        * Indices do not reflect the length of the array.
    - Using a property "length" we can find how many items are in the array.
*/

// Indices    0         1        2          3
let list = ["milk", "bread", "chicken", "butter"];

console.log(list[2]); // chicken

console.log(list.length); // 4, number of items in array (1 higher than highest index)

console.log(list[list.length]); // list[4], undefined

// If needing to find the highest indices, subtract 1 from the length.
console.log(list[list.length - 1]); // butter

list[0] = "chocolate milk"; // Reassign array values

console.log(list);

// Example 2:

let avengers = ["Nick", 5, true, "Steve", "Bruce", ["Thor", true, 100], "Natasha"];

console.log(typeof avengers);// object

// We can use instanceof to check if Array returns a true or false value
console.log(avengers instanceof Array);// true

console.log(avengers[5]); // [ 'Tony', true, 100]
console.log(avengers[5][0]);
console.log(avengers[5][2]);

