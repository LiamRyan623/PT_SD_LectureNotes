// ? Scope: determines the accessibility (visibility) of variable/functions to JavaScript

/* 
    JS's 3 types of scope:
    - Block Scope
        - Defined by curly brackets { } to group elements or statements, block scope is also provided by let and const, ex. "code block"
    - Function Scope 
        - each function creates a new scope: variables inside functions are not accessible outside the function, also known as Local Scope
    - Global Scope 
        - variable declared outside a function is Global: all scripts and functions can access the variable
*/

let globalVariable = true;
console.log("Outside of func " + globalVariable);

function checkGlobalVariable() {
    console.log("Inside of func: " + globalVariable);
}

checkGlobalVariable();

// Global variable
let x = 12;

function scope() {
    // Local Variable
    let x = 33;
    console.log(x);
}


scope(); // 33
console.log(x); // 12


// Example 2
let y = 13;

function newScope() {
    y = 33;
    console.timeLog(`In the newScope function; ${y}`;)
    let z = 45;
}

newScope();
console.log(`Out of the function/globally: ${y}`);
// console.log

// ? Var vs Let
/* 
    Variable keywords:
        - const: cannot be reassigned
        - var: scoped to nearest function block
        - let: scoped to the nearest enclosing block

*/

// * Var example - scoped to function block, variable declared inside {} can be accessed from outside the block

var a = 12;

function varTest() {
    var a = 33

    if (true) {
        var a = 45;
        console.log(`Var - within If: ${a}`)
    }

    console.log(`Var - outside If, inside function: ${a}`)
}

varTest();
console.log(`Var - Outside Function/globally: ${a}`);

/*
 * Let Example - scoped to enclosing block, variable declared inside of a { } block cannot be accessed outside the block.
 */

let b = 12;

function letTest() {
    let b = 100;
    console.log(`Let - start of function: ${b}`)

    if (true) {
        let b = 50;
        console.log(`Let - within If: ${b}`);
    }

    console.log(`Let - end of function: ${b}`)
}

letTest();
console.log(`Let - Outside Function/Global value: ${b}`); // 12

// ? Hoisting: JS's default behavior of moving declarations to the top of the current scope (to the top of the current script/function/file)

/* 
    - JS reads from top to bottom in two passes. Line by line.
        1st pass:
            - Made by the compiler. This is where hoisting is initiated.
            - compiled for execution.
        2nd pass: 
            - variables are assigned.
            - Execution phase
                - runs any hoisted code.

    JavaScript only hoists declarations(let a), not initializations(a = 10; let a = 10).

    To avoid bugs, always declare all variables at the beginning of every scope.
*/

// console.log(`Before ${personName}`) ReferenceError: Cannot access 'personName' before initialization
let personName = "Ben";
console.log(`Before ${personName}`) // Runs correctly

console.log(potato);

b()

function b() {
    console.log("I'm hoisted! By my own Pitard!")
}

b()


//newFunc();// Cannot access 'newFunc' before initializati

let newFunc = () => {
    console.log("Hoisted?")
}

newFunc();