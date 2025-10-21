const mealType = new URLSearchParams(window.location.search).get("mealType");
console.log("Hej fra opskrift list", mealType);

const opskrift_list_container = document.querySelector(".opskrift_list_container");
let allData;
if (mealType === "All") {
  getData("https://dummyjson.com/recipes");
} else {
  getData("https://dummyjson.com/recipes/tag/" + mealType);
}

document.querySelectorAll(".buttons button").forEach((btn) => {
  btn.addEventListener("click", filterKlik);
});

function filterKlik(evt) {
  showFiltered(evt.currentTarget.dataset.mealtype);
}

function showFiltered(filter) {
  if (filter == "All") {
    getData("https://dummyjson.com/recipes");
  } else {
    getData("https://dummyjson.com/recipes/tag/" + filter);
  }

  console.log("showFiltered", filter);
  // console.log(allData.filter((prod) => prod.gender === filter));
}

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData = data.recipes;
      showMealType(allData);
    });
}

function showMealType(mealTypeArray) {
  console.log("mealTypeArray", mealTypeArray);
  opskrift_list_container.innerHTML = "";
  mealTypeArray.forEach((recipe) => {
    opskrift_list_container.innerHTML += `
      <article class="opskrift_list_box">
        <img src="${recipe.image}" alt="${recipe.name}" width="200" />
        <h2>${recipe.name}</h2>
        <p>${recipe.mealType.join(", ")}</p>
        <a href="opskrift.html?id=${recipe.id}">Læs mere</a>
      </article>
    `;
  });
}
