import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from "../../Api/Api";
import SearchBar from "../searchBar";
import SortBy from "../sortBy";
import PokemonCards from "../PokemonCards";
import { useEffect, useState } from "react";
import { Ipokemons, simplePokemon } from "../../interface/interfaces";
import DetailedPokemon from "../DetailedPokemon";
import { Link } from "react-router";

// pokemon weakness is not displayed and evolution is remaining
const Home = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setdebouncedQuery] = useState("");
  const [PokemonName, setPokemonName] = useState("");
  // console.log(PokemonName, 'PokemonName')
  const [pageUrl, setpageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"
  );
  // console.log(pageUrl, "url")

  const { data, error, isError } = useQuery({
    queryKey: ["pokemons", pageUrl, debouncedQuery],
    queryFn: () => fetchPokemons(pageUrl, debouncedQuery),
  });

  console.log(data, "mocked api result")
  const handleNext = () => {
    if (data?.next) {
      setpageUrl(data.next);
    }
  };

  const handlePrevious = () => {
    if (data?.previous) {
      setpageUrl(data.previous);
    }
  };

  const handleSelectedPokemon = (name: string) => {
    console.log(name, "setpokemon name")
    setPokemonName(name);
  };

  // debouncing search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setdebouncedQuery(query);
    }, 1000);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // getting a single poke according to id and passing to detailed pokemon
  const selectedPokemon = data?.results.find(
    (pokemonData) =>
      pokemonData.pokemon?.name.toLowerCase() === PokemonName.toLowerCase()
  );

  if (data === undefined) {
    return <>
      <div className="flex justify-center min-h-80">
        <div className="">
          <h1>sorry this pokemon does not exist</h1>
        </div>
      </div>
    </>
  }

  if (!data) {
    return <h1>loading cards....</h1>
  }

  return (
    <>
      <div className="flex justify-center">
        {isError && <p>{error?.message}</p>}
      </div>
      <div className="flex justify-center mb-10">
        <div className="flex flex-col mr-10">
          <SearchBar handleSearch={handleSearch} query={query} />
          <SortBy
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            nextUrl={data?.next}
            prevUrl={data?.previous}
          />
          {/* increase width here for detail card */}
          <div className="grid grid-cols-3 gap-5 gap-y-16 w-[100%] cursor-pointer ">
            {data?.results.map((item: Ipokemons) => (
              <PokemonCards
               
                key={item.pokemon?.id}
                pokemon={item.pokemon}
                onClick={() => handleSelectedPokemon(item?.pokemon?.name ?? "unknown")}
              />
            ))}
          </div>
        </div>
        {/* detailed pokemon card */}
        <div className="w-[25%] my-20 ">
          {selectedPokemon === undefined ? (
            <DetailedPokemon
              pokemon={data?.results[0].pokemon}
              species={data?.results[0].speciesData}
              evolution={data?.results[0].evolutionChain}
              PokemonWeakness={data?.results[0].PokemonWeakness}
            />
          ) : (
            <DetailedPokemon
              evolution={selectedPokemon.evolutionChain}
              species={selectedPokemon.speciesData}
              pokemon={selectedPokemon.pokemon}
              PokemonWeakness={selectedPokemon.PokemonWeakness}
            />
          )}
        </div>
      </div >
    </>
  );
};

export default Home;
