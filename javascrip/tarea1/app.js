
const container = document.querySelector(".container");
const inputBuscar = document.querySelector(".input-buscar");
const btnBuscar = document.querySelector(".btn-buscar");

const urlMovie = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&";

btnBuscar.onclick = async function () {
    const respuesta = await fetch(urlMovie);
    const data = await respuesta.json();
    readMovies(data.Search); 

};

function readMovies(movies) {
    container.innerHTML = "";
    movies.forEach((movie, index) => {
      container.innerHTML += `
      <div class="card">
      <img src="${movie.Poster}"></img>
       <h4>${movie.Title}</h4>
       <p>${movie.Type}</p>
        </div>
      `;
    });
  }