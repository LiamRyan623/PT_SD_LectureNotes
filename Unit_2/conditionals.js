/* 
    Some fun fact vocab & good to know of things:
        - JS Statement: 
            - any block of code that is performing an action, i.e. the code directions we give the program, let x = 15;
            - JS programs are all just a bunch of statements.
        - JS Expressions: 
            - a block of code that evaluates to a value, i.e. performs some sort of action that *produces a value*
            - Expressions are statements, but statements are not all expressions
    
        To ask JS to perform logic (like conditionals, functions, etc.) we will commonly use this format:
            keyword name (expression) {
                ... code block of logic
            }
*/

/* 
    ? Conditionals
    - Our way to ask JS a question and get an answer value as a response.
    - Evaluates an expression and responds if it is true.
    - Falsy
        - false
        - 0 
        - " ", ' ' (empty strings)
        - null
        - undefined
        - NaN (not a number)
*/

/* 
    If Statements: gives a yes/true response if the expression is true/valid

    Structure:
    if(expression evaluated) {
        codethat runs only if the expression is true.
    }
*/

let isOn = true;

if (isOn == true) {
    console.log("the light is still on...");
}

if (isOn) {
    console.log("The light is on")
}

/* 
    If Else Statement: gives us a no(false) response if the expression isn't true or valid.
*/

let weather = 75;

if (weather < 70) {
    console.log("It's fine out.")
} else {
    console.log("It's too damn hot out.")
}

let loggedInUser = true

if (loggedInUser == true) {
    console.log("Welcome back!")
} else {
    console.log("Please log in, or sign up.")
}


/* 
    and &&, Or ||, not !=: evaluate an expression that is holding multiple check
*/

let rain = false;
let temp = 68;

if (temp < 70 && rain) {
    console.log("Jacket Please")
} else {
    console.log("No jacket needed.")
}


// if the temp is under 70 or(||) it's  raining
if (temp < 70 || rain) {
    console.log("Jacket Please")
} else {
    console.log("No jacket needed.")
}

rain = true

console.log(rain);
console.log(!rain);

if (!rain) {
    console.log("Looks like a beautiful day.")
}