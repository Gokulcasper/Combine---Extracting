// Combining And Extracting Elements

const shopcart = [{ item: "maagi" }];
const addcart = ["matchbox", "salt", "oil"];

// combine Element in array
// let recipe = shopcart.concat(addcart);

//or

let recipe = [...shopcart, { item: "pastha" }, 45, ...addcart];

shopcart[0].item = "Noodels";

//Extracting Element in array
let Extracted = recipe.slice(1, 3);
console.log(recipe);
console.log(Extracted);
