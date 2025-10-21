const recipeId = new URLSearchParams(window.location.search).get("id");
console.log("Hej fra opskriften", recipeId);
const opskrift_container = document.querySelector(".opskrift_container");

getData(`https://dummyjson.com/recipes/${recipeId}`);
//   .then((res) => res.json())
//   .then((data) => {
//     const allRecipe = data.recipes;
//     const recipe = allRecipes.find((r) => r.id == recipeId);
//   });
function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData = data;
      showRecipe(allData);
    });
}
function showRecipe(recipe) {
  console.log("RECIPE", recipe);
  opskrift_container.innerHTML = `
    <article class="single_opskrift">
        <button class="backButton" onclick="window.history.back()">← Tilbage</button>
        <div class="opskrift-billede">
            <img src="${recipe.image}" alt="${recipe.name}" />
        </div>
        <div class="opskrift">
        <div class="h1-opskrift-single">
            <h1>${recipe.name}</h1>
        </div>

        <p><strong>Tilberedningstid:</strong> ${recipe.prepTimeMinutes} min</p>
        
        <div class="ingredienser">
            <p><strong>Ingredienser:</strong></p>
            <ul>
                ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
            </ul>
        </div>
    
        <div class="instruksioner">
            <p><strong>Instruktioner:</strong></p>
            <ol>
                ${recipe.instructions.map((step) => `<li>${step}</li>`).join("")}
            </ol>
        </div>
        </div>
    </article>
    `;
}
