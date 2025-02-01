import { describe, it, expect, vi, beforeEach, afterEach, Mock, } from 'vitest'
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom';
import Home from '..';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import React, { useState } from 'react';




vi.mock('@tanstack/react-query', async () => {
    const actual = await vi.importActual('@tanstack/react-query'); // Import the actual react-query module
    return {
        ...actual, // Keep all the real functionality of react-query
        useQuery: vi.fn(() => ({
            data: {
                results: [
                    {
                        pokemon: {
                            id: 1,
                            name: "Bulbasaur",
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
                        },
                    },
                ],
                next: null,
                previous: null,
            },
            isLoading: false,
            isError: false,
        })),
    };
});


describe("detailed pokemon card", () => {

    const queryClient = new QueryClient()

    it("testing", async () => {
        const setPokemonName = vi.fn();

        // Mock useState to return an initial value and the mock function
        vi.spyOn(React, "useState").mockImplementationOnce(() => ["", setPokemonName]);

        render(
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>
        );

        // Find the pokecard element by its test ID
        const pokecard = screen.getByTestId("pokemon-id-1");

        // Simulate the click event on the pokecard
        fireEvent.click(pokecard);

        // Check that setPokemonName was called with "Bulbasaur"
        // expect(setPokemonName).toHaveBeenCalledWith("Bulbasaur");

        // Optionally, you can log the calls to verify
        console.log(setPokemonName.mock.calls); // Logs the arguments with which it was called
    });

})
