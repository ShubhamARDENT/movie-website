import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../../Api/Api'
import SearchBar from '../searchBar'
import SortBy from '../sortBy'
import PokemonCards from '../PokemonCards'


const Home = () => {
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['pokemons'],
        queryFn: fetchPokemons
    })


    console.log(data)

    return (
        <>
            <div className=''>
                {isLoading && <h1>Loading...</h1>}
                {isError && <p>{error?.message}</p>}
            </div>
            <SearchBar />
            <SortBy />
            <div className='flex justify-center'>
                <div className='grid grid-cols-4 gap-6 mt-10 w-[60%]  '>
                    {data?.map((pokemon) => (
                        <PokemonCards key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            </div>


        </>

    )
}

export default Home