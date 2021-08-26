import React from 'react'
import './Country.scss'
const Country = ({capital,name,region,population,flag}) => {
    return (
        <div className='country-wrapper'>
            <div className="country-flag">
                <img src={flag} alt={name} />
            </div>
            <div className="country-info">
                <h3>{name}</h3>
                <ul>
                    <li><span>Population:</span> {population.toLocaleString()}</li>
                    <li><span>Region:</span> {region}</li>
                    <li><span>Capital:</span> {capital}</li>
                </ul>
            </div>
        </div>
    )
}

export default Country
