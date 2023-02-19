/* 
? Array destructuring

    - Allows us to unpack values from arrays into distinct variables.
    - Similar syntax to array literals, but the square brackets [] are on the left side of the assignment operator (=)
    - Great way to get info from the array and assign it to it's own variable.
*/

// W/O destructuring
const fullName = ["Liam", "Ryan"];
//const firstName = fullName[0];
//const lastName = fullName[1];
//console.log(firstName, lastName);

// W/ Destructuring

let [firstName, lastName] = fullName;
console.log(firstName);
console.log(lastName);
console.log(firstName, lastName);

//----------------------------------------


/* 
?   Spread Operator

    - The spread operator basically pulls out the elements of an array as a standalone list of elements.

    - Denoted by three consecutive periods: ...Array
    
*/

const myName = ["Liam", "Ryan"];

const copiedName = [...myName]; // The spread operator inserts the elements from fullName
console.log("Copied with spread operator:", copiedName);// Copied with the spread operator: ["Liam", "Ryan"]

// const anotherCopy = [myName];
// console.log("Copied w/o spread operator:" anotherCopy)


// An example with numbers:
// let numberArray = [];

// for (i = 0; i <= 20; i++) {
//     numberArray.push(i);
// }
// console.log(numberArray)

// const newNumberArray = [...numberArray];
// console.log(newNumberArray);


// The spread operator copied the first state of my name. The copy did not update but the update but the original can.
myName.unshift("Mr");
console.log(myName)
console.log(copiedName)

const prices = [10.99, 5.99, 20, 3.99];
console.log(Math.min(Prices)) // NaN
console.log(Math.min(...prices)); // 3.99. spread operator was able to unpack the numerical values from the array to process with Math.min



//* Ex changing the original and copied array.

const persons = [
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "John",
      age: 35,
    },
  ];

  // Old way of copying persons:
 // const copiedPersons = persons.map((person) => ({
//     name: person.name
//     age: person.age
//   }));



// using spread operator;
const copiedPersons = [...persons]

// Test using push on persons array, does copiedPersons change
persons.push({name: "Anna", age: 29})

console.log("Persons array", persons) // Includes Anna object in array

  console.log("Copied person's array:", copiedPersons); // copy does not include Anna, created before Anna was added.