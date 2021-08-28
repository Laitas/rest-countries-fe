import React from 'react'
import './Country.scss'
import { setCountry } from '../../redux/countrySlice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
const Country = ({alpha3Code,capital,name,region,population,flag}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const routeChange= () =>{
        console.log(alpha3Code);
        dispatch(setCountry({alpha3Code}))
        console.log(dispatch(setCountry({ alpha3Code })));
        history.push(`/country/${alpha3Code}`)
    }
    return (
        <div className='country-wrapper' onClick={routeChange}>
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
