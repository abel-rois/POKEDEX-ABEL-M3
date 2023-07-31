const pokeApi = "https://pokeapi.co/api/v2/pokemon/";
const buttonSearch = document.querySelector("#search");
const pokeInput = document.querySelector("#barra-busqueda");
const titleStats = document.querySelector("#title-stats");
const form = document.querySelector("form");
const pokeName = document.querySelector("#poke-name");
const pokeImg = document.querySelector("#poke-img");
const pokeNumber = document.querySelector("#poke-number");
const pokeType = document.querySelector("#poke-type");
const pokeStats = document.querySelector("#poke-stats");

buttonSearch.addEventListener("click", insertPokemon);
form.addEventListener("submit", insertPokemon);

function insertPokemon(event) {
    event.preventDefault();
    const pokemonName = pokeInput.value.toLowerCase();
    fetch(`${pokeApi}${pokemonName}`)
    .then(response => {
        if (response.status === 404) {
            alert("Este Pokémon no está disponible, intenta de nuevo")
        } else {
            return response.json()

        }
    })
    .then(responseJSON => {
        clearPokemonData();
        pokeName.textContent = responseJSON.name;
        console.log(responseJSON.moves);
        pokeImg.src = responseJSON.sprites.front_default;
        pokeNumber.innerHTML = `<strong>Número:</strong> ${responseJSON.id}`;
        pokeType.innerHTML = `<strong>Tipo:</strong> ${responseJSON.types.map(type => type.type.name).join(", ")}`;
        titleStats.innerHTML = `<strong>Estadísticas:</strong>`;
        const statsList = responseJSON.stats.map(stat => {
            return `<li>${stat.stat.name}: ${stat.base_stat}</li>`;
        }).join("");

        pokeStats.innerHTML = statsList;
    })
    .catch(error => {
        console.error("Error al obtener el Pokémon:", error);
    });
}

function clearPokemonData() {
  pokeName.textContent = "";
  pokeImg.src = "";
  pokeNumber.textContent = "";
  pokeType.textContent = "";
  pokeStats.innerHTML = "";
}

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error al obtener el Pokémon:", error);
  });

