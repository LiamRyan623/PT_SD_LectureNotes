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


  //*  Variables within Memory
// first assignment/original assignment

  let x = 10;
  let y = "abc";
  let z = null;

// reassign to another variable
let a = x
console.log(a)
let b = y;
console.log(b);

// Reassign a and b
a = 5;
b = "def";

console.log(x, y, a, b); // 10, abc, 5, def

//-------------

let arr = ()
arr.push(1)
console.log(`arr: ${arr}`)

let reference = [1]
let refCopy = reference;
console.log(`refCopy: ${refCopy}`);

reference.push(2);// both reference and refCopy will have the 2 added.
console.log(reference, refCopy);

refCopy.push(3);
console.log(reference, refCopy);// what HAD been expected was [1, 2] [1, 2, 3]. What WAS returned was [1, 2, 3] [1, 2, 3].

//---------------------------------------------
//? Rest Syntax
/* 
  We can use the spread operator syntax, referred to as 'rest' syntax when working with array destructuring, to package up the REST of the values in the referenced array, and return them as their own array.


   - Looks exactly like the spread syntax: ...
   - Spread -> "expands" an array
   - Rest -> "condenses" an array
*/

const fullNameAgain = [
  "Jane",
  "Doe",
  "Mrs.",
  {
    month: 03,
    date: 22,
    year: 1973,
  },
  2,
  "test",
  "4",
  true,
  false,
];

let janesName = fullNameAgain[0]
// console.log(janesName) // Jane

// Using both array destructuring and rest:
let [newFirstName, newLastName, ...otherInfo] = fullNameAgain
console.log(`newFirstName; ${newFirstName}`)// Jane
console.log(`newLastName: ${newLastName}`)// doe
console.log(`otherInfo: ${otherInfo}`)// [object object], 2, test, 4, true, false
console.log(otherInfo); // [{month: 3, date: 22, year: 1973}, 2, 'test', '4', true, false]

