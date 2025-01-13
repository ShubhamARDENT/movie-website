import { Ipokemon } from "../interface/interfaces";

const fetchPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

    const data = await response.json();
    const urls = await Promise.allSettled(
      data?.results.map(async (pokemon: Ipokemon) => {
        const response = await fetch(pokemon.url);
        const pokeData = await response.json();
        return pokeData;
      })
    );
    return urls;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { fetchPokemons };
