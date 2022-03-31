var foodAPIKey = "f1d8bb5060f667390aea5bdedc8729b1";
var foodID = "636d33a1";
var data;

var inputUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=beans&app_id=636d33a1&app_key=f1d8bb5060f667390aea5bdedc8729b1&mealType=Breakfast&calories=0-500`;

console.log(inputUrl);

// var foodpref = userinput"", drop down with food suggestions

// "https://api.edamam.com/api/recipes/v2?type=public&q=" + foodpref + "&app_id" +foodID +"&app_key="+foodAPI+"&mealType=" + mealType + "&calories=" calCount

// generates the recipes with for loop
function generateRecipes(data) {
  console.log(data);
  // var queryArray = data.hits
  for (let i = 0; i < 6; i++) {
    //   const element = data.hits[i];
    var listGen = data.hits[i];
    var thumbnails = data.hits[i].recipe.images.THUMBNAIL;
    var label = data.hits[i].recipe.label;
    var ingredients = data.hits[i].recipe.ingredientLines[i];
    console.log(label);
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    card.textContent = thumbnails;
    var headerEl = document.createElement("h3");
    headerEl.setAttribute("class", "card-header");
    headerEl.textContent = label;
    var body = document.createElement("div");
    body.setAttribute("class", "card-content");
    body.textContent = card;

    var p1 = document.createElement("p");
    p1.setAttribute("class", "card-content");
    p1.textContent = "";

    var p2 = document.createElement("p");
    p2.setAttribute("class", "card-text");
    p2.textContent = "";

    var cardEL = document.createElement("div");
    cardEL.setAttribute("class", "card-header");
  }
}

var fetchResponse = fetch(inputUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateRecipes(data);
  });

console.log(recipeArray);
