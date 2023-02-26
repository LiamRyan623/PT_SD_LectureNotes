/* 
?   Lookup tables and State Machines

    * Lookup Table;:
    - Objects that help us reference other values, great when working with collections of data.
    - Often called dictionaries, Objects work like dictionaries in JS, holding key value pairs to store collections of data.

    Lookup Table == object/dictionary

    These can help with/why:
    - Make the code cleaner and easier to read.
    -eliminated branching of conditionals by creating a simpler lookup.
    - Default evaluation does not need to wait for all conditions to get processed. If a key does not exist in the lookup table, it returns the default condition straightaway.
    - Good for evaluating multiple rules/two or more conditions.

*/

//create an arrow function named listGames with a parameter of system
const listGames = (system) => {
    // Build a collection object
    let collection = {
        Nintendo: ["Duck Hunt", "The Legend of Zelda", "Super Mario Bros."],
    "Super Nintendo": ["Super Mario World", "F-Zero", "Star Fox"],
       Nintendo64: ["Super Mario 64", "Mario Kart 64", "GoldenEye 007"],
    }

    //console.log("Inside Function: ", collection['Nintendo64'])
    return collection[system];
}

console.log(listGames("Nintendo64"))
console.log(listGames("Nintendo"));
console.log(listGames("Nope"));


// another Ex:


const stateAbbreviation = {
    alaska: "ak",
    delaware: "de",
    hawaii: "hi",
    indiana: "in",
    vermont: "vt",
  };
  
  const acronym = {
    asap: "as soon as possible",
    fomo: "fear of missing out",
    gif: "graphics interchange format",
    lol: "laugh out loud",
  };

  //console.log(stateAbbreviation["hawaii"]);
  // Create a findIt function that will use whatever object(dict) and key term(search) give and return the value result if found


  function findIt(dict, search) {
    return dict[search];
  }

  let stateInUs = findIt(stateAbbreviation, "vermont");
  console.log(stateInUs);

  let acro = findIt(acronym, "gif");
  console.log(acro);

  // An example with else ifs (conditionals) versus table lookup:
// We have to take of a kiddo based on how they feel

// function howIsChild with parameter name of state that returns messages based on the kids status.
const howIsChild = (state) => {
    if (state == "Hungry") {
        return "THE KID WANTS FOOD"
    } else if (state == "sad") {
        return "The child is crying."
    } else if (state == "Happy") {
        return "Huzzah"
    } else {
        return "Thank the gods. It's sleeping."
    }
}

console.log(howIsChild("Happy"));

// Use a table and arrow function to do the above

const kidFeelsTable = {
    Hungry: "THE CHILD NEEDS FOOD",
    Sad: "The child is crying",
    Happy: "Huzzah",
};

const howIsKiddo = (state) => kidFeelsTable[state] || "They're sleeping...";

console.log(howIsKiddo("Happy"));
console.log(howIsKiddo());


/* 
    *  State Machines:
    - A state machine reads a set of inputs and changes to a different state based on those inputs.
    - a mathematical model of computation, usually used to design algorithms.

    State: is the set of all variables in a program, and their values at any point in time. (A variable and it's value.)

    A simple example: A light switch.
    - The light switch has two states: On and off.
    - Flipping the switch will transition to the other state.
    - When the "machine" exits the on state, we get a side effect of the light turing off.
    - When the "machine" enters the on state, we get a side effect of the light turning on.

    -A state machine is an alternative way of modeling program state: Instead of defining independent variables, a machine is crafted specifically to handle what states are possible, and when a machine is a given state, what next state is allowed. (from https://statecharts.dev/what-is-a-state-machine.html)
*/

// build a traffic light state machine:
// create a state object with light color keys with values of an array to the other light color options.

let state = {
    green: ["yellow"],
    yellow: ["red"],
    red: ["green", "yeild"],
    yield: ["red"]
};

let currentState = "green";

// Create a function to handle and transition between status
function enterState(newState) {
    //create a check to see what values are valid and available.
    // Establish which point in our state object that we want to reference.
    let validTransitions = state[currentState];

    console.log(`\nThe light is currently: ${currentState}
    `);    

    // check if our key includes the state the user wants to transition to.
    if (validTransitions.includes(newState)) {
        // Allow our state to change if true to next state
        currentState = newState;
        return `The light turns ${currentState}`
    } else {
        //Have a message if state is not available.
        //console.log("Invalid State.")
        // use throw to stope, state, and define an error
        throw `Invalid state; ${currentState} to ${newState}`
    }
}

let changeToYellow = enterState(`yellow`);
console.log(changeToYellow);

let changeToRed = enterState(`red`);
console.log(changeToRed);

let changeToGreen = enterState(`green`);
console.log(changeToGreen);

let brokenLight = enterState(`red`);
console.log(brokenLight);

