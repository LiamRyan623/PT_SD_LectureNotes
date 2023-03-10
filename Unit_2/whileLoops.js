/* 
    ?  While Loops: loops through a block of code WHILE a specific condition is true.

    While loop Structure:
    while (condition) {
        code to run/execute
    }

        - The main purpose for while loops are when the iteration is uncertain.
*/

let n = 1;
while(n < 10) {
    console.log(`n before addition: ${n}`);
    n++;
    console.log(`n after addition: ${n}`); 
    console.log("      ")
}

while(n <= 20) {
    console.log(`bingo ${n}`);
    n++;

}

let y = 1;
while (y <5) {
    y++
    console.log(y)
}




let message = "";
let z = 0;

while (z < 5) {
    message = "The number is " + z;
    z++;
    console.log(message)
}

let city = [
    "building",
    "building",
    "light pole",
    "bridge",
    "building",
    "light pole",
    "tree",
    "light pole",
    "empty street",
  ];

  let structure = city[0];
  console.log(structure);

let pos = 0;

while (structure != "empty street")  {
    console.log(`Spider-Man swings from the ${structure}!`);
    pos++
    structure = city[pos];
}

console.log(`Spider-Man lands in the ${structure}!`);

/* 
    ? Do While Loop: also loops through a block of code while a specified condition is true BUT...
        * loop will run the code block ONCE, BEFORE checking if the condition is true and will keep running as long as the condition stays true.

    Do While structure:
    do {
        code to run/execute
    } while (expression/condition)

    - Works just like while lops, with the exception that it will run the code block at least once.
*/

let num = 5;

do {
    console.log(`The number is ${num}.`)
    num++
} while (num < 10);

console.log(num) // 10

let result = "";
let i = 1;
do {
    i += 1;
    result += `$[i]`;
    console.log(`i is ${i} and being added to the string; ${result}.`);
} while (i > 0 && i <= 5);

console.log(`Ending result: ${result}`);

let value = 20;

do {
    value *= 2;
} while (value > 100);

console.log(value);

// Mock switching accounts from deactivated to activated, use a boolean.

let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false,
};

let acctNum = 1

do {
    // Write a message to show inactive
    console.log(
        `acct${acctNum} is currently inactive: set to ${accounts[`acct${acctNum}`]}.`);

        // Activating message and set acct to true
        console.log("Activating....");
        accounts[`acct${acctNum}`] = true;
    
        // Confirmation message
        console.log(
            `acct${acctNum} is now active: account is set to ${accounts[`acct${acctNum}`]}.`); 
        
        // After account has been activated, add 1 to acct# to move on to next account
        acctNum++;
} while (accounts[`acct${acctNum}`] == false)

// finish message
console.log('All accounts are now active.')
console.log(accounts)