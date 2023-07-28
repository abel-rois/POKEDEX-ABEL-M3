const pokeApi = "https://pokeapi.co/api/v2/pokemon/";
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
    window.fetch(`${pokeApi}${pokeName.value.toLowerCase()}`)
    .then(response => {
        if (response.status === 404) {
            alert("Este Pokemón no está disponible, intenta de nuevo")
        } else {
            return response.json()
        }
    })
    .then(responseJSON => {

        // const allItems = []

        const result = []

        for (let pokemonInfo in responseJSON) {
            result.push([pokemonInfo , responseJSON[pokemonInfo]])           
        }
        console.log(result);
    })


}