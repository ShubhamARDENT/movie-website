
import { describe, it, expect, vi, beforeEach, afterEach, Mock } from 'vitest'
import PokemonCards from "..";
import { render, screen } from "@testing-library/react"
import { simplePokemon } from '../../../interface/interfaces';
import '@testing-library/jest-dom';

describe("pokemon cards", () => {
    beforeEach(() => {
        global.fetch = vi.fn()
    })

    afterEach(() => {
        vi.resetAllMocks()
    })

    it("should render the component", async () => {


        const mockSimplePokemon: simplePokemon = {
            id: 25,
            name: "Pikachu",
            weight: 60,
            height: 4,
            base_experience: 112,

            sprites: {
                other: {
                    showdown: {
                        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    },
                    "official-artwork": {
                        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                    }
                }
            },

            cries: {
                latest: "https://raw.githubusercontent.com/PokeAPI/sounds/master/pokemon/25.mp3"
            },

            types: [
                { type: { name: "electric" } }
            ],

            abilities: [
                { ability: { name: "static", url: "https://pokeapi.co/api/v2/ability/9/" } },
                { ability: { name: "lightning-rod", url: "https://pokeapi.co/api/v2/ability/31/" } }
            ],

            stats: [
                { base_stat: 35, stat: { name: "hp" } },
                { base_stat: 55, stat: { name: "attack" } },
                { base_stat: 40, stat: { name: "defense" } },
                { base_stat: 50, stat: { name: "special-attack" } },
                { base_stat: 50, stat: { name: "special-defense" } },
                { base_stat: 90, stat: { name: "speed" } }
            ]
        };

        (global.fetch as Mock).mockResolvedValueOnce({
            json: async () => mockSimplePokemon
        })

        render(<PokemonCards pokemon={mockSimplePokemon} />)
        expect(screen.getByText(mockSimplePokemon.name)).toBeInTheDocument()
        expect(screen.getByText(mockSimplePokemon.types[0].type.name)).toBeInTheDocument()
    })
})