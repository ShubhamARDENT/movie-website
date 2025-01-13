

interface simplePokemon {
    id: number,
    name: string,
    sprites: {
        other: {
            showdown: {
                front_default: string
            }

        }
    }
    cries: {
        latest: string
    }

    types: {
        type: {
            name: string
        }
    }[]
}

interface Ipokemon {
    pokemon: simplePokemon
}

const PokemonCards = ({ pokemon }: Ipokemon) => {

    const typeColors: { [key: string]: string } = {
        grass: "bg-green-600", // Green for Grass type
        water: "bg-blue-500",  // Blue for Water type
        fire: "bg-red-500",    // Red for Fire type
        electric: "bg-yellow-500", // Yellow for Electric type
        poison: "bg-purple-500",  // Purple for Poison type
        psychic: "bg-pink-500",   // Pink for Psychic type
        bug: "bg-green-700",      // Dark Green for Bug type
        dragon: "bg-indigo-600",  // Indigo for Dragon type
        fairy: "bg-pink-300",     // Light Pink for Fairy type
        normal: "bg-gray-400",
        flying: "bg-blue-600",
        steel: 'bg-gray-500'
    }

    // console.log(pokemon)
    const { front_default } = pokemon.sprites.other.showdown

    return (
        <div
            className="shadow-md 
                 rounded-2xl
                bg-white
                 flex flex-col 
                 items-center
                 w-[100%]
                 h-[200px]                ">
            <img src={front_default} alt={pokemon.name}
                className="w-11" />
            <p className='font-bold text-2xl'>{pokemon.name}</p>
            <div className="flex  justify-between gap-4">
                {pokemon.types.map((type) => {
                    const typeColor = typeColors[type.type.name]
                    return <span className={`${typeColor} px-5 py-2 font-bold rounded-md`}>{type.type.name}</span>
                })}
            </div>
        </div>
    )
}

export default PokemonCards