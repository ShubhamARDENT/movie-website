

interface simplePokemon {
    id: number,
    name: string,
    weight: number,
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
        grass: "bg-green-600 text-green-900", // Green for Grass type
        water: "bg-blue-500 text-blue-900",  // Blue for Water type
        fire: "bg-red-600 text-red-900",    // Red for Fire type
        electric: "bg-yellow-600 text-yellow-900", // Yellow for Electric type
        poison: "bg-purple-600 text-purple-900",  // Purple for Poison type
        psychic: "bg-pink-500 text-pink-900",   // Pink for Psychic type
        bug: "bg-green-700 text-green-900",      // Dark Green for Bug type
        dragon: "bg-indigo-600 text-indigo-900",  // Indigo for Dragon type
        fairy: "bg-pink-300 text-pink-900",     // Light Pink for Fairy type
        normal: "bg-gray-500 text-gray-900",
        flying: "bg-blue-500 text-blue-900",
        steel: 'bg-gray-500 text-gray-900'
    }

    // console.log(pokemon)
    const { front_default } = pokemon.sprites.other.showdown

    return (
        <div
            className="shadow-md 
                 rounded-2xl
               bg-white
                flex
                flex-col
                items-center
                 w-[100%]
                 h-[250px]
                 p-5

                max-w-[300px]
                ">
            <img src={front_default} alt={pokemon.name}
                className="w-[100px] h-[100px] object-contain -mt-20" />
            {/* description */}
            <div className="flex flex-col items-center mt-5">

                <p className="text-gray-400 font-semibold text-sm  ">Weight:{pokemon.weight}</p>

                <p className='font-bold text-2xl h-[30px] my-5 overflow-hidden'>{pokemon.name}</p>

                <div className="flex justify-between gap-3 flex-wrap">
                    {pokemon.types.map((type, index) => {
                        const typeColor = typeColors[type.type.name]
                        return <span key={index} className={`${typeColor} color px-5 py-2 font-bold rounded-md`}>{type.type.name}</span>
                    })}
                </div>
            </div>

        </div>
    )
}

export default PokemonCards