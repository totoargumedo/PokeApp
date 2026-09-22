import { pokemones } from "./db/pokemones.js";

let app = document.querySelector("#app");

app.innerHTML = '<div id="pokedex-section"></div>';

let pokedexSection = document.querySelector("#pokedex-section");

for (let pokemon of pokemones) {
  console.log(pokemon.nombre);
  console.log(pokemon.imagen);

  pokedexSection.innerHTML += `<article>
                                <h2>${pokemon.nombre}</h2>
                                <img src="${pokemon.imagen}" alt="${pokemon.nombre}" />
                            </article>`;
}
