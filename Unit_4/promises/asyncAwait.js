/* 
?   Async/Await
        - introduced in ES* in 2017
        - can make any function async by denoting(naming) it as such

    Keywords:
        - async, denotes a function to be async
        - await, calls a process to wait for our results

        - can help us reduce the need for callback functions.
        - can not be used in loops
        - always returns a promise
*/

// Example Structure / Syntax
// Async Function Declaration(declarative style)
async function asyncFunName() {
    // code to run
}

// async function expression

let funExpressionName = async function () {
    //code to execute
}

// async arrow function
let arrowFuncName = async () => {
    // code block
}


//------------------------------------------

//*    Because async functions ALWAYS return a promise.We can use promise resolvers(.then(), .catch())

async function getName() {
    return "Gandalf the Grey";
}

//console.log(getName());

/* 
?   Await
      - Tells JS that a promise is being returned and to wait on that result.

*/

async function extraData() {
    // returnData() is one of our functions in our promises.js file.
    l//et info = returnData();

    // include await so we "wait" for the response, so we don't get undefined data.

    let info = await returnData();

    return `{info} stored in some cloud or api`
}

extraData().then((data) => console.log("line 51 return of asyncAwait.js:", data))