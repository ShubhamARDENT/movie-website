import { Ipokemon } from "../interface/interfaces";

const fetchPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

    const allData = await response.json();

    // making an array of each pokemon url
    const pokemonUrls = allData.results.map(async (pokemon: Ipokemon) => {
      const response = await fetch(pokemon.url);
      const data = response.json();
      return data;
    });

    // fetching all pokemon urls
    const detailedPokemons = await Promise.all(pokemonUrls);
    return detailedPokemons;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { fetchPokemons };
