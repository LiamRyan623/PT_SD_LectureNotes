// TODO write our Global Variables
// variable to connect to the form and one to connect to the table body, something to hold all the animal data(array)
const form = document.querySelector('form');
const table = document.querySelector('tbody');

// Will make array later
let animals = [];


/* console.log(form);
console.log(form.name);
 */

console.log(form[0].placeholder); // hits the first input in the form with [] and used dot notation to look at the placeholder we set (hint: can find other values of the input)

//todo Create an event listener for form
// event listener: something to listen for, when heard, do the thing.(something for it to do/trigger)


form.addEventListener("submit", 
e => {
// we need something to stop the browser from refreshing the page.
e.preventDefault();
       /* console.log(event);
       console.log("I clicked the button!"); */
       const animal = {
        species: form.species.value,
        name: form.name.value,
        sex: form.sex.value
       }
animals.push(animal);
//console.log(animals);
//console.log(animal);

// Two new window Methods;
form.reset(); // point to our form and clear it
//form[0].focus();
form.species.focus();


    displayTable();//calling the function in the event so each animal gets displayed.
     });


//todo   Display to the table body (function)

function displayTable() {
    //console.log('displayTable()', animals);
    while(table.firstChild) {
        table.removeChild(table.firstChild);
    };
    // Use a .forEach loop to create the needed table elements per animal, assign values, and then append to page.
    // Each row: needs an ID (#), the sex, and the species.
    animals.forEach((a, i,) => {
        console.log("in forEach Loop:", i, a);


        // create Elements:
        let tr = document.createElement('tr'); // this will be parent element for our "td"
        let id = document.createElement('td');
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td');


        // Assign Elements values:
        id.textContent = i +1;// ++, Using the index position in array, and adding 1 to become the ID
        name.textContent = a.name;
        sex.textContent = a.sex;
        species.textContent = a.species;


        // Append Elements to DOM/Parent
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species)
        table.appendChild(tr);
    })

}