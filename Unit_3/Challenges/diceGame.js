/* 
    * Let's build a dice game.
    - User plays the dice game, roll dice up to 3 times, and I want to focus on scoring per dice roll and totaling the score at the end of the game.

    To do list:
   // - Tell JS what things are with variables.
        - score
        - dieRollValue
        - the state of the dice (rolled or not rolled)
        - numberOfRolls (eventually try to set a max of 3)
    //- Use dictionary/object/lookup table to store our scoring values.
    //- Use state/a state machine o check which action options the player has:
        - Not rolled, roll, score(ending the game and printing final total)
    //- build a function to update the player score
    //- Build a function to roll the die, and update the roll count.
    - Build a function to monitor/check our turn/action state. and advance play state( can we roll? Are we done? Has the game started?)
        1. Check if the action/next action is valid(can we do this.) IF ELSE
        2. if the die is rolled: 
            - first check check if not at max count of 3, CONDITIONAL
            - if under three we can roll the die, 
            - total and set score. REASSIGN SCORE VARIABLE.
        3. If die is to be scored: (CONDITIONAL) print a message with the players final score & reset our starting values/reset the game (REASSIGN VARIABLES)
*/

//* Creating my variables
let score = 0;// default starting score of the game
let dieRollValue; // variable that holds our roll value, the side we landed on.
let stateOfDie = "not rolled";// current state of our die(whether rolled or not)
let numberOfRolls = 0;// starting count for our allowed rolls (1-3)

//* Use a dictionary to store score values.
// 1 = 100, 2 = 20, 3 = 30, etc
const scoring = {
    1: 100,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 60,
};

//* state of player's turn:
//3 states: "roll", "not rolled", "score"

let dieState = {
    "not rolled": ["roll"],
    roll: ["roll", "score"],
    score: ["not rolled"]
}


// Make a function to update our score as well as print a message(console.log) to give us feedback
function scoreDice (dict, dieSide) {
    // create some math to add new roll score value to our base score variable
    let points = dict[dieSide];
    score += points;
    // Same as score = score + points
    //console.log a message of where score is
    console.log(`After rolling the die, your score is: ${score}.`);
}

// Build a function that will generate a random number limited by 6(Using a d6) and increase our roll count variable numberOfRolls.

// Test if scoreDice works...
//scoreDice(scoring, 5);
//scoreDice(scoring, 1);

function rollDie() {
    // Generate a random # that is less than 6
    dieRollValue = Math.floor(Math.random() * 6 + 1);
    //console.log(dieRollValue);  testing
    numberOfRolls++;
    //console.log(numberOfRolls);  testing
}

//testing function
/* rollDie();
rollDie();
rollDie();
 */


// Build a function to pull in our state/action change, check it, and run the rest of our conditionals.

function playState(newDieState) {
    // Reference/find my starting state
    // Game default start is "not rolled", but need variable that will be updates as player "roll"s and want to check if action is available.
    let validDieState = dieState[stateOfDie];

    // using a conditional, to check if die action of validDieState 
    if (validDieState.includes(newDieState)) {
        // Set our newDieState to the variable stateOfDie(reassign)
        stateOfDie = newDieState;

        // If the state of die is "roll" do the following: 
        if (stateOfDie === "roll") {
            // first check to make sure we aren't at max number of rolls
            if (numberOfRolls === 3) {
                console.log(`You've rolled ${numberOfRolls} times and need to score. This roll is invalid.`);
            } else {
                // If we haven't hit max rolls, roll the dice and send a message to the player.
                rollDie(); // Will get a random value(side 1-6) and increase the number of rolls.

                //write a message
                console.log(`You rolled a ${dieRollValue}! Would you like to roll again, or finalize the score?`)

                // Score the rolled dice and print a message of rolls made.
                scoreDice(scoring, dieRollValue); // run function built above
                console.log(`You have rolled ${numberOfRolls} time(s).`)
            } 
        }



        // If the stateOfDie is "score" do the following:
        if (stateOfDie === "score") {
            // reset all values, print final score message
            console.log(`Your final score is ${score}. Thanks for playing. Loser.`)
            dieRollValue = "not rolled";
            numberOfRolls = 0;
            score = 0;
        }


    } else {
        console.error(`Invalid move! cannot ${newDieState} after ${validDieState}`)
    }
}

// Calling on the playSate function and give die action as an argument
/* playState("roll");
playState("roll")
playState("roll")
playState("score") */

 function roundTwo() {
   console.log("\n\n------ Welcome to Dice Game, Round Two! ------\n");
   playState("roll");
   playState("roll");
   playState("roll");
   playState("score");
   console.log("\n------ End of Round two, thanks for playing! ------\n");
 }

 roundTwo();