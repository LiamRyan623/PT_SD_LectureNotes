/*
    JavaScript Operators
        - Plus          +
        - Times         *
        - Power         **
        - Dot           .
        - Assignment    =
        - Comparison    ==
                        ===

    Used to:
        - Assign
        - Compare
        - Arithmetic(maths...)
        - Logical 
        - Conditionals
*/

// Equal to: ==, checks value
"3" == 3;
console.log("3" == 3);

// Strict equal to: ===, checks value and data type
console.log("3" === 3); // false

// Not Equal and Strict Not Equal: !=, !==
console.log("2" != 2); // False
console.log("2" !== 2); // True

// Greater Than / Less Than: > <, true/false return
let y = 3 > 2;
console.log("Greater Than:", y); // True

//Greater han or Equal to: >=
console.log(3 >= 2, 5 >= 10, 5 >= 5) // True, False, True

// Less Than or Equal To: <+
console.log( 2 <= 2, 1 <= 2, 5 <= 2) // True, True, False

// And;&&
console.log(2 < 10 && 2 > 1) // True

// Or: || Looks for the first value that is true, and returns that.

//* Logical Operators: determine the logic between variables or values
// Ex with reassignment
let a = 1; // 1

let x = 3;
let z = 5;
console.log(x >= z);

// Ex w/o reassignment
let g = 100;
console.log(g = 50); // 150
console.log(g); // 100 

// addition;
r += 1; // r = r + 1

let s = 50;
console.log(s += 5); // s = 50 + 5
console.log(s);

// Subtraction
r += 1; // r = r - 1

// Multiplication
r *=2 // r = r * 2

// Division: /

r /= 3 // r = r / 3

// Remainder (modulus %)
r %= 1; 

// Exponential 
r **=1; // r = r * r

console.log(2 ** 3) // 8, ()