console.log("Hej fra opskriften");

const recipeId = new URLSearchParams(window.location.search).get("id");
const opskrift_container = document.querySelector(".opskrift_container");

fetch("https://dummyjson.com/recipes")
  .then((res) => res.json())
  .then((data) => {
    const allRecipe = data.recipes;
    const 
  });
