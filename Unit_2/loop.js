// ? LOOPS

/* 
    Loops through a block of code a number of times.

    If stuck in an accidental infinite loop:
        ctrl+c, and ctrl+z(mac)

    ? For Loop:
        Takes in 3 parameters(The things within the () )
            - Initial expression
            - Condiion
            - increment expression.

    Structure: 
    for (initial expression ; condition ; increment expression) {
        ...code block of logic
    }
*/

for (i = 0; i < 10; i++) {
    console.log(i);
}

console.log("finished with loop")

for (i = 0; i <= 20; ++ 2) {
    console.log(i)
}

for(i = 10; i >= 0; i--) {
    console.log(i)
}

for(i = 10; i > 0; i--) console.log(i) // if using a straight return you don't have to use curly braces.

let firstName = "Liam";

for (let i =0; i < firstName.length; i++) {
    console.log(i, firstName[i])
}




let sum = 0

for (let i = 1; i <= 50; i++) {
    sum += i;
}

console.log(sum);


// ?  For In Loops: Loops through the properties of an object.

/* 
    Structure:
    for (key in object) {
        ...code to run
    }

    key is a random variable name of our choice. Object is the name of the object we are targeting.
*/

let student = {
    name: "Liam",
    awesome: true,
    degree: "JavaScript"
}

console.log(student["name"]) // pulls out the value of the "name" from the object. "name" is the key.

for (item in student) {
    console.log(item); // printed each key in the object
    console.log(student[item]); // prints each value of each key
}

//variable name for key can be whatever we want


let catArray = [
    "tabby",
    "british shorthair",
    "burmese",
    "maine coon",
    "rag doll",
  ];


  /* 
    * For in can be used on objects and arrays, but if array index order is important it's better to use a for loop, for of loop, or Array.forEach() method.
*/


  for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat])
  }

  // ? For Of Loops: Loops through the values of an iterable object.

  /* 
    Iterable - object that has iterable properties

    structure:
    for (variable of iterable) {
        ...code to execute/run
    }

    ^variable is any word we choose to use. Iterable is the name of any iterable thing(object, array etc...)
    
    Can loop over arrays, strings, etc
    */

    // For of doesn't play with objects
    //for (item of student) {
    //    console.log(item);
    }

    for (cat of catArray) {
        console.log("FOR OF LOOP:" cat)
    }


    for (bubbles of catArray) {
        if (bubbles === "maine coon") {
            console.log(`My favorite cat is the ${bubbles}!!!`)
        } else {
            console.log("Not a maine coon... :( ");
        }
    }