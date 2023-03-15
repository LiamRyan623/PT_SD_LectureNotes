/* 
toDo;
    - Make needed global variables
    - Build Fetch to test the API endpoint
    - Make an array variable to hold recipies
    - Connect to the DOM of the HTML 
*/

const url = "https://api.spoonacular.com/recipes/random";
const apiKey = "8bf94a648f2f425ba58d037579c1ec4a"
let buildURL = `${url}/?apiKey=${apiKey}`
//DOM elements
const searchForm = document.querySelector("#search-form")

// Build function for Displaying Random Recipe single card
const displayRandomCard = (recipe) => {
    //console.log(recipe);
    const randomCard = document.querySelector(".random-card")

while(randomCard.firstChild) {
    randomCard.removeChild(randomCard.firstChild);
}

//* Create Elements
let card = document.createElement('div');
let img = document.createElement('img');
let body = document.createElement('div');
let title = document.createElement('h5');
let btn = document.createElement('a');

    //* Set Attributes
    card.className = 'card';
    card.style.width = '18rem';
    img.src = recipe.img; // using our obj to place the value.
    img.className = 'card-img-top';
    img.alt = recipe.title;
    body.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    btn.className = 'btn btn-primary';
    btn.textContent = "Add Recipe";


    //* Attach Elements

    body.appendChild(title);
    body.appendChild(btn);

    card.appendChild(img);
    card.appendChild(body);

    randomCard.appendChild(card);


}


// Build Function for our saved recipes

// EVENT LISTENER
searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stops our page from refreshing due to default properties of our form
  

// Fetch()


  fetch(buildURL)
    .then((res) => res.json())
    .then((data) => {//console.log(data))
        let recipe = data.recipes[0];

        let obj = {
            title: recipe.title,
            img: recipe.image,
            src: recipe.sourceUrl
        };

        displayRandomCard(obj)
    })
    .catch((err) => console.error(err));
});