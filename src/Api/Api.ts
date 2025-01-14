import { Ipokemon } from "../interface/interfaces";

const fetchPokemons = async (url: string) => {
  try {
    const response = await fetch(url);

    const allData = await response.json();
    console.log(allData);
    // making an array of each pokemon url
    const pokemonUrls = allData.results.map(async (pokemon: Ipokemon) => {
      const response = await fetch(pokemon.url);
      const data = response.json();
      return data;
    });

    // fetching all pokemon urls
    const detailedPokemons = await Promise.all(pokemonUrls);

    // getting all pokemon location urls
    // const locationUrls = detailedPokemons.map(async (pokemon) => {
    //   const response = await fetch(pokemon.location_area_encounters);
    //   const data = response.json();
    //   return data;
    // });

    // const PokemonLocation = await Promise.all(locationUrls);
    // console.log(PokemonLocation);
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
