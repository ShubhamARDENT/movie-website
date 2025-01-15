import { Ipokemons } from "../../interface/interfaces"


const PokemonCards = ({ pokemon, onClick }: Ipokemons) => {

    // type bg-colors along with text colors
    const typeColors: { [key: string]: string } = {
        grass: "bg-green-500 text-green-900", // Green for Grass type
        water: "bg-blue-500 text-blue-900",  // Blue for Water type
        fire: "bg-red-500 text-red-900",    // Red for Fire type
        electric: "bg-yellow-500 text-yellow-900", // Yellow for Electric type
        poison: "bg-purple-500 text-purple-900",  // Purple for Poison type
        psychic: "bg-pink-500 text-pink-900",   // Pink for Psychic type
        bug: "bg-green-500 text-green-900",      // Dark Green for Bug type
        dragon: "bg-indigo-500 text-indigo-900",  // Indigo for Dragon type
        fairy: "bg-pink-500 text-pink-900",     // Light Pink for Fairy type
        normal: "bg-gray-500 text-gray-900",     //gray for normal type
        flying: "bg-blue-600 text-white",
        steel: 'bg-gray-500 text-white',
        rock: 'bg-green-500 text-red-900',
        fighting: 'bg-red-500 text-white',
        ground: 'bg-green-500 text-red-900',
        ice: 'bg-cyan-500 text-white',
        ghost: 'bg-black text-white'
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
                "
            onClick={onClick}>
            <img src={front_default} alt={pokemon.name}
                className="w-[100px] h-[100px] object-contain -mt-20" />
            {/* description */}
            <div className="flex flex-col items-center mt-5">

                <p className="text-gray-400 font-semibold text-sm  ">Weight:{pokemon.weight}</p>

                <p className='font-bold text-2xl h-[35px] my-5 overflow-hidden'>{pokemon.name}</p>

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