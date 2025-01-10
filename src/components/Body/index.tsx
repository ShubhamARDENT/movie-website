import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../../Api/Api'


const Home = () => {

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['pokemons'],
        queryFn: fetchPokemons
    })


    console.log(data)
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {isError && <p>{error?.message}</p>}
           
        </div>
    )
}

export default Home