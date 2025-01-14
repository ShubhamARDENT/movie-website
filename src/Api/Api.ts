import { Ipokemon } from "../interface/interfaces";

const fetchPokemons = async (pageurl: string, query: string) => {
  try {
    const url = query ? `https://pokeapi.co/api/v2/pokemon/${query}` : pageurl;
    const response = await fetch(url);
    const allData = await response.json();

    if (query) {
      const data = {
        results: [allData],
        next: allData.next,
        previous: allData.previous,
      };
      return data;
    }
    // making an array of each pokemon url
    const pokemonUrls = allData.results.map(async (pokemon: Ipokemon) => {
      const response = await fetch(pokemon.url);
      const data = response.json();
      return data;
    });

    // fetching all pokemon urls
    const detailedPokemons = await Promise.all(pokemonUrls);

    const data = {
      results: detailedPokemons,
      next: allData.next,
      previous: allData.previous,
    };
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { fetchPokemons };
