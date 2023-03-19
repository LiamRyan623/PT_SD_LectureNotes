/* 
toDo;
    //- Make needed global variables
    //- Build Fetch to test the API endpoint
    //- Make an array variable to hold recipies
    - Connect to the DOM of the HTML 
*/

//Global Variables

const url = "https://api.spoonacular.com/recipes/random";
const apiKey = "8bf94a648f2f425ba58d037579c1ec4a";
let buildURL = `${url}/?apiKey=${apiKey}`;
let storedRecipes = [];
//DOM elements
const searchForm = document.querySelector("#search-form");

// Function to properly append children/elements
const removeElements = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

// Build function for Displaying Random Recipe single card
const displayRandomCard = (recipe) => {
  //console.log(recipe);
  const randomCard = document.querySelector(".random-card");

  removeElements(randomCard);

  //* Create Elements
  let card = document.createElement("div");
  let img = document.createElement("img");
  let body = document.createElement("div");
  let title = document.createElement("h5");
  let btn = document.createElement("a");

  //* Set Attributes
  card.className = "card";
  card.style.width = "18rem";
  img.src = recipe.img; // using our obj to place the value.
  img.className = "card-img-top";
  img.alt = recipe.title;
  body.className = "card-body";
  title.className = "card-title";
  title.textContent = recipe.title;
  btn.className = "btn btn-primary";
  btn.textContent = "Add Recipe";
  btn.onclick = () => {
    // When the button is clicked: push the recipe object to storedRecipe array
    storedRecipes.push(recipe);
    // Run the display stored recipe function
    savedRecipeTable();
  };

  //* Attach Elements

  body.appendChild(title);
  body.appendChild(btn);

  card.appendChild(img);
  card.appendChild(body);

  randomCard.appendChild(card);
};

// Build Function for our saved recipes
const savedRecipeTable = () => {
  //console.log('Saved recipe function: array -', storedRecipes);

  let keptCards = document.getElementById("kept-cards");

  removeElements(keptCards);

  storedRecipes.map((recipeObj) => {
    // Create elements

    let div = document.createElement("div");
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cBody = document.createElement("div");
    let cTitle = document.createElement("h5");
    let p = document.createElement("p");
    let a = document.createElement("a");

    // assign attributes
    div.className = "col";
    card.className = "card";
    img.className = "card-image-top";
    img.src = recipeObj.img;
    img.alt = recipeObj.title;
    cBody.className = "card-body";
    cTitle.className = "card-title";
    cTitle.textContent = recipeObj.title;
    p.className = "card-text";
    a.href = recipeObj.src;
    a.target = "_blank";
    a.textContent = "Link to Recipe";

    // Append
    p.appendChile(a);
    cBody.appendChild(cTitle);
    cBody.appendChild(p);
    card.appendChild(img);
    card.appendChild(cBody);
    div.appendChild(card);

    keptCards.appendChild(div);
  });
};

// EVENT LISTENER
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stops our page from refreshing due to default properties of our form

  // Fetch()

  fetch(buildURL)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data))
      let recipe = data.recipes[0];

      let obj = {
        title: recipe.title,
        img: recipe.image,
        src: recipe.sourceUrl,
      };

      displayRandomCard(obj);
    })
    .catch((err) => console.error(err));
});
