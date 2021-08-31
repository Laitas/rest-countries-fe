import React from 'react'
import './FilterInput.scss'
import { AiOutlineArrowDown } from 'react-icons/ai'
const FilterInput = ({setCountries,setRegion}) => {
  const [dropdown,setDropdown] = React.useState(false);
  const fetchAll = async () => {
    const fetchData = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await fetchData.json();
    setCountries(data);
  };
  const regionChange = (e) =>{
  setRegion(e.target.innerText)
  }
    return (
      <div className="filter-input">
        <span className="filter-input--title" onClick={() => setDropdown(!dropdown)}>Filter by region <AiOutlineArrowDown className={dropdown?'icon active' : 'icon false'}/></span>
        <div
          className={
            dropdown ? "filter-input--dropdown-true" : "filter-input--dropdown-false"
          }
        >
          <span onClick={fetchAll} className="option">All</span>
          <span onClick={regionChange} className="option">Africa</span>
          <span onClick={regionChange} className="option">Americas</span>
          <span onClick={regionChange} className="option">Asia</span>
          <span onClick={regionChange} className="option">Europe</span>
          <span onClick={regionChange} className="option">Oceania</span>
        </div>
      </div>
    );
}

export default FilterInput
