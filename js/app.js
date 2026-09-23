import { pokemones } from "./db/pokemones.js";

let app = document.querySelector("#app");

app.innerHTML = '<section class="pokedex-section"></section>';

let pokedexSection = document.querySelector(".pokedex-section");

pokedexSection.innerHTML =
  '<div id="pokedex-gallery" class="pokedex-gallery"></div>';

let pokedexGallery = document.querySelector("#pokedex-gallery");

for (let pokemon of pokemones) {
  console.log(pokemon.nombre);
  console.log(pokemon.imagen);

  pokedexGallery.innerHTML += `<article class="pokemon-card">
                                  <div class="pokemon-image">
                                    <img src="${pokemon.imagen}" alt="${pokemon.nombre}" />
                                  </div>
                                  <div class="pokemon-info">
                                    <span class="pokemon-id"> N.º 0${pokemon.id} </span>
                                    <h2>${pokemon.nombre}</h2>
                                    <div class="pokemon-types">
                                      <span class="type type-${pokemon.tipo[0].toLowerCase()}"> ${pokemon.tipo[0]} </span>
                                    </div>
                                    <p class="pokemon-rareza">${pokemon.rareza}</p>
                                    <button class="btn-detalle" data-id="${pokemon.id}">Ver detalles</button>
                                  </div>
                                </article>`;
}
