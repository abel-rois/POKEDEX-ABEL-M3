const pokeApi = "https://pokeapi.co/api/v2/ability/"
const buttonSearch = document.querySelector("#search");
const pokeCard = document.querySelector("#poke-card");
const pokeName = document.querySelector("#poke-name");
const pokeImgContainer = document.querySelector("#poke-img-container");
const pokeImg = document.querySelector("#poke-img");
const pokeNumber = document.querySelector("#poke-number");
const pokeType = document.querySelector("#poke-type");
const pokeStats = document.querySelector("#poke-stats");

buttonSearch.addEventListener("click", insertPokemon);

function insertPokemon(event) {
event.preventDefault();
console.log("Holi");  
}