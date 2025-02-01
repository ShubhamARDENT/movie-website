import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Pokedex from ".."
import '@testing-library/jest-dom';  // Add this to make matchers like toBeInTheDocument() work
import { Mock } from "vitest";
import { postData } from "../postApi";
import { putData } from "../putApi";
import { patchData } from "../patchApi";
import { globalAgent } from "http";
import { deleteData } from "../deleteAPi";



describe("making a post request", () => {

    beforeEach(() => {
        global.fetch = vi.fn()
    })

    afterEach(() => {
        vi.resetAllMocks()
    })
    // post request test
    it("should make a post request to an api", async () => {

        const mockRepsonse = {
            id: 101,
            title: "foo",
            body: "bar",
            userId: 1,
        };

        // mocking the retun value if post success
        (global.fetch as Mock).mockResolvedValueOnce({
            json: async () => mockRepsonse
        })


        const result = await postData()


        expect(fetch).toHaveBeenCalledTimes(1)

        expect(result).toEqual({
            id: 101,
            title: "foo",
            body: "bar",
            userId: 1,
        })

        expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

    })
    // put request test
    it("should make put request to an api", async () => {

        const mockResponse = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        (global.fetch as Mock)
            .mockResolvedValue({ json: async () => mockResponse })
            .mockResolvedValue({ json: async () => mockResponse })


        const result = await putData()

        expect(result).toEqual({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        })

        expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            body: JSON.stringify({
                id: 1,
                title: "foo",
                body: "bar",
                userId: 1,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })


    })
    // patch request test
    it("should make patch requst to an api", async () => {

        const mockResponse = {
            id: 1,
            title: 'foo',
            body: '...',
            userId: 1
        };


        (global.fetch as Mock)
            .mockResolvedValue({
                ok: true,
                json: async () => mockResponse,
            })


        await patchData()
        // expect(result).toEqual(mockResponse)

        expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            body: JSON.stringify({
                title: "foo",
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
    })

    it("should make delete request to an api", async () => {

        (global.fetch as Mock).mockResolvedValueOnce({
            ok: true,
            status: 200
        })


        const result = await deleteData()


        expect(result).toBe(200)

        expect(fetch).toHaveBeenCalledTimes(1)


        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1', {
            method: "DELETE"
        })
    })

})
