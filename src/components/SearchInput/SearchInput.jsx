import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './SearchInput.scss'
const SearchInput = () => {
    return (
        <div className='search-input'>
            <form>
                <input type="text" placeholder='Search for a country...'/>
            </form>
            <AiOutlineSearch className='icon'/>
        </div>
    )
}

export default SearchInput
