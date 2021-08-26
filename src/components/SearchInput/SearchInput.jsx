import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './SearchInput.scss'
const SearchInput = ({nameCountry,setNameCountry}) => {
    return (
        <div className='search-input'>
            <form>
                <input type="text" placeholder='Search for a country...'
                value={nameCountry}
                onChange={e=>setNameCountry(e.target.value)}
                />
            </form>
            <AiOutlineSearch className='icon'/>
        </div>
    )
}

export default SearchInput
