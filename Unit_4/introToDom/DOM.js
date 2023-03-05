console.log("In DOM/.js file, linked via src in script tag.")
/* 
?   DOM
    - Document Object Model
    - ^ Only through the browser

    Frame:
        - Document: HTML page
            - Is a global variable
        - Object: Elements(tags) and comments (nodes)
        - Model: Arrangement

    - Data representation of objects that comprise the structure and content of a document on the web

    Basic Structure:
    - Document
        -HTML
            - Head
                - Metadata
                - Link
                - Title
            - Body
                - Nav
                - Header
                - Div
                - And any of their attributes.


    ?BOM
        - Browser Object Model
        - Window object.variable that we can gain access to 
        - Has various methods available to us.

*/


function askForStuff() {
    prompt();
}

// askForStuff();

// Document Variable - Global
console.log(document)

console.log(document.URL);
console.log(document.location);
console.log(document.title);
//Reassignment
document.title = "DOM updated Lesson";
console.log(document.title);

//? Creating our first element
/* 
    Chain of events to add new element:
    1. Create our element.
    2. Apply our values (reassigning values to property keys)
    3. Place our element (adding to the doc body object.)
*/
/* 
    Created a variable to store a newly made element.
    Our variable now has access to various properties:
        - innerHTML: can inject(we reassign) a block of HTML
        - innerText: returns the visible text text contained in a node.
        - textContent: returns the full text
        ex:
        <p>Hello <b>World<b> </p>
        - innerText would return just "Hello"
        - textContent would return "Hello World"
*/
let h1 = document.createElement("h1");
//console.log(document.createElement("h1"));
h1.innerText = "Creating my first DOM element!" // reassigning the innerText property of h1.
//console.log(h1);
// Access the global document variable, step into with dot notation the document body, use appendChild method to add new element/tag to our HTML body.

document.body.appendChild(h1)

// Altering the element via it's properties
h1.style.color = "purple";
h1.style.textAlign = "center";
// We can also build a general CSS: However reassigning the style attribute to these new values.

h1.style = 'text-shadow: 2px 2px 2px yellow; color: purple';
// We can do one off or multiple

// JS requires camelCasing as "class is a keyword that means something different"
h1.className = "h1-class-name";
h1.class = "set-id";

//?     Finding Elements

/* 
    HTMLCollection
        - An array like object
        - Allows access to index, properties, and methods to help navigate and modify elements.
        - NOTE: Does NOT allow you to modify a group of elements all at once.
        - Can loop through this
        - Can use the .length property to get the size of the list.(# of targeted elements)  
        

        To Get Singular Element:
        - use array notation
        - use .item() method

        Accessing multiple elements  requires these methods:
        - getElementsBTagName(
        - .querySelectorAll
        - .getElementsByClassName()




        )
*/


let li = document.getElementsByTagName("li");
console.log(li);

console.log(li[0]);

let bathroom = li[0];
bathroom.style.color = "red";

// li.style.color = "yellow"; cannot set the color of an array, this is not targeting all items at once.

// Because the method returns an array-like object, we can use array aspects/methods/tools
for (i of li) {
    //console.log(i);
    i.style.color = "purple";
}

/* 
    * .querySelector()
        - Grabs the first instance of an element or null if nothing is found.
        - Can target by ID, Class(className), or Element
            - Will need to append # for ID
            - Will need to append . for class
*/

/* let firstLi = document.querySelector("li");
console.log(Firstli) */

let toDoList = document.querySelector("#listTitle");
console.log("QuerySelector(#):", toDoList);
toDoList.style.textAlign = "center";


// Only targets first instance of class
let listItems = document.querySelector(".listItem");
listItems.style.textAlign = "center"

/* 
*   .querySelectorAll()
    - Returns a static nodeList (an array) list of elements.
    *Static: will not update
*/

//* Static Example
let newListItem = document.createElement('li');
// Target our ul
let ul = document.getElementById('ulToDo');
console.log(ul);


newListItem.className = "listItem"
newListItem.innerText = "New Item Test";
// Styling or any other atributes are not set to this "new Element"
ul.appendChild(newListItem);

// We can see how the other li elements are different via the console.
console.log(li)

// .getElementsByClassName()
let liClass = document.getElementsByClassName('listItem')
console.log('\n---------------\n');
console.log("ByClassName: ", liClass)



// ? Event Listeners
/* 
    Allow us to execute a function when an event occurs.
    .addEventListener()
        - DOM node method
        - requires an event to "listen" for or type and a callback function
*/
let btn = document.getElementById("submit"); // "Grabs"/creates reference to the button w/ id "submit"
// If we wanted to see all node/element properties available to us:
let btnNode = document.getElementsByTagName("button");
// console.log(btnNode);

// Directly adding and testing the event listener method
// btn.addEventListener("click", (event) => {
//   console.log(event);
//   console.log("I clicked the button!");
// });

/* 
    Goal: have the input text be added to the list on the page.

    Steps for Adding an Item to the List:
        //- Capture the input value from the HTML
        //- Use the button and click (pass/capture that input value)
        //- Create a new element (li)
        //- Assign values to new element (attributes)
            //- new li gets class(className)
            //- assign innerText to input value
        - Append the new element to the parent element/node/box

    Functionality Step:
        //- add event listener to the button 
        //- use variables to contain the HTML tags we're referencing (document.getElementById)
        //- build function that creates and assigns attribute for the new li element

*/

// Add click event to button
btn.addEventListener("click", addItem);

// Created variable input to reference and use input of HTML
// let input = <input type="text" id="listInput" placeholder="ToDo Item" />;
let input = document.getElementById("listInput");
let inputNode = document.getElementsByTagName("input");
//Console.log input node to know how to grab value
// console.log(inputNode);

// Build our function: use declarative format, name it addItem, no params
function addItem() {
  // Capture our value from the input: .value property
  // Targeting the input node via the variable name and whatever information is being stored in the value property
  console.log(input.value);

  // Create a new li element
  let newItem = document.createElement("li");

  // Assign our property values
  newItem.className = "listItem";
  newItem.textContent = input.value;

  // Append new element to parent element
  ul.appendChild(newItem);

  // Kate being extra and wanting to reset the input to blank
  input.value = "";
}
// creating something new

// global variables: build button, parent container, mock data

let buildBtn = document.getElementById("table-btn");

let parentShellDiv = document.getElementById('shell-div');
const myList = [
    'red', 'blue', 'green', 'purple', 'yellow', 'orange'
]

// event listener with the button.
buildBtn.addEventListener("click", buildTable);

// build a function to create everything

function buildTable() {
    //console.log("running buildTable function on button click")


    myList.forEach((color, i) => {
       // console.log(color, i);

       //*create elements
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');


       //* assign attributes of the new element(give the content of each element)
        h2.textContent = color;
        h2.style.color = color;
        p.innerHTML = `Item <u><b>${i}</u></b> in my list.`

        // Add styling to div containers
        div.style = `
            border: 3px solid ${color};
            padding: 10px;
        `;

       //* append to parent container/element
        div.appendChild(h2);
        div.appendChild(p);

        // add the div to the parent div in HTML
        parentShellDiv.appendChild(div);

    })

    parentShellDiv.style = `
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-evenly;
    `;
}