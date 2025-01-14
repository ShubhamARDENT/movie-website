import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../../Api/Api'
import SearchBar from '../searchBar'
import SortBy from '../sortBy'
import PokemonCards from '../PokemonCards'
import { useState } from 'react'


const Home = () => {

    const [pageUrl, setpageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['pokemons', pageUrl],
        queryFn: () => fetchPokemons(pageUrl)
    })
    console.log(data)
    console.log(data?.results)
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
    console.log(pageUrl)
    return (
        <>
            <div className='flex justify-center'>
                {isLoading && <h1>loading</h1>}
                {isError && <p>{error?.message}</p>}
            </div>
            <SearchBar />
            <SortBy
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                nextUrl={data?.next}
                prevUrl={data?.previous} />

            <div className='flex justify-center'>
                <div className='grid grid-cols-4 gap-20 mt-20 w-[75%]  '>
                    {data?.results.map((pokemon) => (
                        <PokemonCards key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            </div>

        </>

    )
}

export default Home