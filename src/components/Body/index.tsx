import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../../Api/Api'
import SearchBar from '../searchBar'
import SortBy from '../sortBy'
import PokemonCards from '../PokemonCards'
import { useEffect, useState } from 'react'
import { Ipokemons } from '../../interface/interfaces'
import DetailedPokemon from '../DetailedPokemon'

// pokemon weakness is not displayed and evolution is remaining
const Home = () => {
    const [query, setQuery] = useState('')
    const [debouncedQuery, setdebouncedQuery] = useState('')
    const [PokemonName, setPokemonName] = useState('')
    const [pageUrl, setpageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['pokemons', pageUrl, debouncedQuery,],
        queryFn: () => fetchPokemons(pageUrl, debouncedQuery,)

    })
    console.log(data, 'body')

    const handleNext = () => {
        if (data?.next) {
            setpageUrl(data.next)
        }
    }

    const handlePrevious = () => {
        if (data?.previous) {
            setpageUrl(data.previous)
        }
    }

    const handleSelectedPokemon = (name: string) => {
        setPokemonName(name)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setdebouncedQuery(query)
        }, 1000)
        return () => clearTimeout(timer)
    }, [query])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }


    // getting a single poke according to id and passing to detailed pokemon

    const selectedPokemon = data?.results.find((pokemonData) => pokemonData.pokemon.name === PokemonName);


    return (
        <>
            <div className='flex justify-center'>
                {isLoading && <h1>loading</h1>}
                {isError && <p>{error?.message}</p>}
            </div>
            <SearchBar handleSearch={handleSearch} query={query} />
            <SortBy
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                nextUrl={data?.next}
                prevUrl={data?.previous} />

            <div className='flex justify-center'>
                {/* increase width here for detail card */}
                <div className='grid grid-cols-3 gap-5 gap-y-16 my-20 w-[60%] cursor-pointer  '>
                    {data?.results.map((pokemonData: Ipokemons) => (
                        <PokemonCards key={pokemonData.pokemon.id}
                            pokemon={pokemonData.pokemon}
                            species={pokemonData.species}
                            evolution={pokemonData.evolution}
                            onClick={() => handleSelectedPokemon(pokemonData.pokemon.name)} />
                    ))}
                </div>
                <div className='w-[16%] my-20'>
                    {selectedPokemon === undefined ? <DetailedPokemon
                        pokemon={data?.results[0].pokemon}
                        species={data?.results[0].speciesData}
                        evolution={data?.results[0].evolutionChain}
                        PokemonWeakness={data?.results[0].PokemonWeakness}
                    /> :
                        <DetailedPokemon
                            evolution={selectedPokemon.evolutionChain}
                            species={selectedPokemon.speciesData}
                            pokemon={selectedPokemon.pokemon}
                            PokemonWeakness={selectedPokemon.PokemonWeakness} />}
                </div>
            </div>
        </>

    )
}

export default Home