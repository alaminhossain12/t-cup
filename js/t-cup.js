const loadCocktail = (search) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCocktails(data.drinks));
};

const displayCocktails = (drinks) => {
  // console.log(drinks);
  const drinksContainer = document.getElementById("drinks-container");
  drinksContainer.innerHTML = "";
  drinks.forEach((drink) => {
    // console.log(drink);
    const drinkDiv = document.createElement("div");
    drinkDiv.classList.add("col");
    drinkDiv.innerHTML = `
    <div class="card">
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h1>${drink.strTags}</h1>
      <h3>${drink.strGlass}</h3>
      <h4>${drink.strCategory}</h4>
      <h5 class="card-title">${drink.strDrink}</h5>
      <p class="card-text">
        ${drink.strInstructions.slice(0, 200)}
      </p>
      <button onclick="loadCocktailsDetails('${
        drink.idDrink
      }')" class="btn btn-danger">Details Cocktails</button>
    </div>
  </div>
    `;
    drinksContainer.appendChild(drinkDiv);
  });
};

const searchCocktails = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  loadCocktail(searchText);
  searchField.value = "";
};

const loadCocktailsDetails = (idDrink) => {
  // console.log(idDrink);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => showsDetailsCocktail(data.drinks[0]));
};

const showsDetailsCocktail = (drink) => {
  console.log(drink);
  const showDetailsCup = document.getElementById("shows-details-cocktail");
  showDetailsCup.innerHTML = "";
  const CocktailDiv = document.createElement("div");
  CocktailDiv.classList.add("card");
  CocktailDiv.innerHTML = `
  <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h1>${drink.strTags}</h1>
    <h3>${drink.strGlass}</h3>
    <h4>${drink.strCategory}</h4>
    <h5 class="card-title">${drink.strDrink}</h5>
    <p class="card-text">
      ${drink.strInstructions.slice(0, 200)}
  </p>
  </div>
  `;
  showDetailsCup.appendChild(CocktailDiv);
};

loadCocktail("B");
