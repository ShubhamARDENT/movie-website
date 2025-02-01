import React, { useState } from 'react'

const Pokedex = () => {

    const [pokemonName, setPokemonName] = useState("")


    return (
        <div>
            <div>
                PokeDex
            </div>
            <div>{pokemonName}</div>

            <button
                style={{
                    background: "red",
                    padding: "10px"
                }}
            >Post button</button>
        </div>
    )
}

export default Pokedex