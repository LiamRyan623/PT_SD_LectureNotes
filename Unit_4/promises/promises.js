/* 
?   promises
        Is an object that may produce a singular value in the future.
        A promise allows us to "wait" for our results (regardless if we get a positive response or negative rejection.)

        3 states;
        -pending, ...in the process of getting a result
        - fulfilled ...we successfully got the result
        -rejected, ...we were not able to get the result.


        - Always returns an object { }


        - Promises take in two parameters;
            - Resolve
            - Reject


            https://www.w3schools.com/js/js_promise.asp
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
*/


// mock/faux internet send
/* function getData() {
    setTimeout(()=> {
        return "here's some faux data"
    }, 3000)
} */

/* let data = getData() // the value comes "late" by three seconds.
console.log(data) // We get an undefined because the information is delayed when it/the code is compiled.
 */


// use callback - callbacks functions get executed after the end of a process

function getData(cb) {
    setTimeout(() => {
        cb("some data to hopefully be delivered")
    }, 3000);
}

getData((data) => console.log(data))

console.log("complier stuff")

/* 
*     A promise is an object that may produce a singular value in the future.
        - Resolved: If we obtain our data, we can resolve and use it.
        - Rejected: If we get nothing or an error, we can handle it with reject.
*/

function returnData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve("Some data from resolved promise.")
            } else {
                reject("This is a rejection. Promise failed.")
            }
        })
    })
}

//console.log(returnData());

/* 
?     Resolvers
        - Wen returned, the returnData() function will return/give a promise instead of a given string.
        - Chaining with a resolver
        - Keywords:
            - .then()
                If success "then" do this
                Can be chained together, do multiple things
            - .catch()
                If error/rejection
        - Take in a callback function (thick arrow)
        -* Only put the semicolon(;) AFTER the LAST resolver
        ex; promiseResults.then().then().then().catch

*/