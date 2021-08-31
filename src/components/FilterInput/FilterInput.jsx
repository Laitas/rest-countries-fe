import React from 'react'
import './FilterInput.scss'
import { AiOutlineArrowDown } from 'react-icons/ai'
const FilterInput = ({region,setRegion}) => {
  const [dropdown,setDropdown] = React.useState(false);
    return (
      <div className="filter-input">
        <span className="filter-input--title" onClick={() => setDropdown(!dropdown)}>Filter by region <AiOutlineArrowDown className='icon'/></span>
        <div
          className={
            dropdown ? "filter-input--dropdown-true" : "filter-input--dropdown-false"
          }
        >
          <span className="option">All</span>
          <span className="option">Africa</span>
          <span className="option">Americas</span>
          <span className="option">Asia</span>
          <span className="option">Europe</span>
          <span className="option">Oceania</span>
        </div>
        {/* <select value={region} onChange={e=>setRegion(e.target.value)}>
            <option value=""selected disabled className='disabled'>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select> */}
      </div>
    );
}

export default FilterInput
