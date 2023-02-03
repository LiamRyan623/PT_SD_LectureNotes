/* 
    JavaScript Data Types
        - JavaScript is considered "dynamically typed"; data types exist but our variables are not bound to any of them (we have to assign them ourselves)
*/

// Booleans: a true or false data value.
let on = true;
let off = false;

console.log(on, off);

// Null: is a value of "nothing," Something that doesn't exist. An intentional absence of any object value.
let empty = null;
console.log(empty);

// Undefined: A variable without a value. Gets both a value and type of undefined.
let x;
let undef = undefined;
console.log(x, undef);
console.log(typeof undef);

// Numbers: values are stored as decimal numbers, can be written with or without decimals.
let degrees = 90;
console.log(degrees)

let precise = 999999999999999; // 15 characters allowed before a roundup.
console.log(precise)

let thisExample = 0.2 + 0.1;
console.log(thisExample);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// String; Is a series of characters written using single or double quotes.

let stringOne = "Double Quotes";
let stringTwo = 'SingleQuotes';
console.log(stringOne, stringTwo);

let myFriend = 'And she said, "Blah, blah, blah!"';
let me = "Did you say, 'Blah, blah?'";
console.log(myFriend, me);

// Numbers vs Strings
let first = 1234 + 567;
let second = '1234' + '567';

console.log(first);
console.log(second);

// typeof provides us the data type of a variable
console.log(typeof first);
console.log(typeof second);

let createNum = Number("123");
let notANum = Number('abc');
console.log(createNum, typeof createNum);
console.log(notANum); //NaN; not a number

// type coercion: when we take one data type become another.

let sum = "1" = 3;
console.log(sum, typeof sum);

// Objects: can contain many values and value types. These values are stored in properties (pairs of keys/names and values).
//    1     2
let Frodo = {
//   3  4    5
    race: "Hobbit",
    rings: 1,
    cloak: true,
}

/* 
    1. Variable name of the object.
    2. Curly brace; Objects are denoted with curly braces. Inside the braces are the objects properties.
    3. The key or name of the property.
    4. key/value pairs are separated with the colon.
    5. The property/key's value.
*/
console.log(Frodo)

// Arrays:
//    1    2       3
let list = ["item1", "item2", "item3"]

/* 
    1. Name of the Array, or list.
    2. The array is inside of these square brackets.
    3. each item, regardless of datatype, is separated by commas.
    Denoted by []
*/

let burritos = ["large", 10, true];
console.log(burritos);

/* 
    1. Name of the Array, or list.
    2. The array is inside of these square brackets.
    3. each item, regardless of datatype, is separated by commas.
    Denoted by []
*/

// Literals
// string literal
let car = "Subaru";
let truck = car; // Not a literal

// numeric literal
let dec = 25;