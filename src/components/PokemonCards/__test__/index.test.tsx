import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import PokemonCards from "..";
import { render } from "@testing-library/react"




describe("pokemon cards", () => {
    it("should render the component", () => {

        beforeEach(() => {
            global.fetch = vi.fn()
        })

        afterEach(() => {
            vi.resetAllMocks()
        })

        render(<PokemonCards />)
    })
})