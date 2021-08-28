import React from 'react'
import './FilterInput.scss'
const FilterInput = ({region,setRegion}) => {
    return (
      <div className="filter-input">
        <select value={region} onChange={e=>setRegion(e.target.value)}>
            <option value=""selected disabled className='disabled'>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
      </div>
    );
}

export default FilterInput