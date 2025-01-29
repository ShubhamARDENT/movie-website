import { Ipokemon } from "../interface/interfaces";

const fetchPokemons = async (pageurl: string, query: string) => {
  try {
    // if query exist then my query api call is made else by default url
    const url = query ? `https://pokeapi.co/api/v2/pokemon/${query}` : pageurl;
    const response = await fetch(url);
    const allData = await response.json();
    // console.log(allData);
    // for search query
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
      const data = await response.json();

      // getting species data of all pokemons
      const species = await fetch(data.species.url);
      const speciesData = await species.json();

      // getting evolution data of all pokemons
      const evolutionChainResponse = await fetch(
        speciesData.evolution_chain.url
      );
      const evolutionChainData = await evolutionChainResponse.json();

      const PokemonWeaknessUrls = data.types.map(async (weakness: Ipokemon) => {
        const response = await fetch(weakness.type.url);
        const data = await response.json();
        return data;
      });

      const PokemonWeakness = await Promise.all(PokemonWeaknessUrls);
      // return species data and evolution data of each pokemon
      return {
        pokemon: data,
        PokemonWeakness: PokemonWeakness,
        speciesData: speciesData,
        evolutionChain: evolutionChainData,
      };
    });

    //  fetching all pokemon urls along with speciesdata
    // and evoluton data of all pokemons
    const detailedPokemons = await Promise.all(pokemonUrls);
    // console.log(detailedPokemons);

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
