const btnGetPokemons = document.querySelector("#get-pokemons");
const container = document.querySelector(".container");

const urlPokemons = "https://pokeapi.co/api/v2/pokemon";

btnGetPokemons.onclick = async function () {
    const respuesta = await fetch(urlPokemons);
    const data = await respuesta.json ();
    readPokemons(data.results); 

};

function readPokemons(pokemons) {
    container.innerHTML = "";
    pokemons.forEach((pokemon, index) => {
      container.innerHTML += `<div class="card">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png" alt="" />
          <h4>${pokemon.name}</h4>
          <p>
            ${pokemon.url}
          </p>
        </div>
      `;
    });
  }