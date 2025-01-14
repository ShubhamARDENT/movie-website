import React from 'react'

import pokeball from '/images/pokeball.png'

interface IQuery {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
    query: string;
}
const SearchBar = ({ handleSearch, query }: IQuery) => {

    return (
        <section className='flex justify-center align-middle  '>
            <div className='w-3/5 relative'>
                <input
                    onChange={handleSearch}
                    type="text"
                    value={query}
                    placeholder='search your pokemon !'
                    className='text-lg px-6 py-[25px] w-full rounded-lg shadow-md outline-none
                font-sans ' />
                <button className=' rounded-lg absolute top-[1rem] right-[1rem]'>
                    <img src={pokeball} alt="pokeball " className='h-12' />
                </button>

            </div>
        </section>
    )
}

export default SearchBar