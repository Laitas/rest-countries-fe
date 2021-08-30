import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setCountry } from '../../redux/countrySlice';
import BackButton from '../../components/BackButton/BackButton';
import './Countrypage.scss'

const Countrypage = () => {
    const [loading,setLoading] = useState(true)
    const [place,setPlace] = useState([])
    const [routeChangeState,setRouteChangeState] = useState(false)
    const country = useSelector(state => state.country.alpha3Code)
    const dispatch = useDispatch()
    const history = useHistory()
    const fetchCountry = async () =>{
        try {
            const fetchData = await fetch(
              `https://restcountries.eu/rest/v2/alpha/${country}`
            );
            const data = await fetchData.json();
            setPlace(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
        
    }
    const {
      name,
      nativeName,
      flag,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    } = place;
    const routeChange = (border) => {
      console.log(border);
      dispatch(setCountry(border));
      console.log(dispatch(setCountry(border)));
      history.push(`/country/${border}`);
      setRouteChangeState(true)
    };
    useEffect(()=>{
        fetchCountry()
        setRouteChangeState(false)
        },[routeChangeState])
        if(loading){
            return <div className="loading"><h1>Loading...</h1></div>
        }else{          
        return (
          <div className="country-page">
              <div className="button">
              <BackButton/>
              </div>
            <div className="place">
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              <div className="info">
                  <h1>{name}</h1>
                <div className="main-info">
                  <div className="main-info--top">
                  <ul>
                    <li>
                      <span>Native Name: </span>
                      {nativeName}
                    </li>
                    <li>
                      <span>Population: </span>
                      {population.toLocaleString()}
                    </li>
                    <li>
                      <span>Region: </span>
                      {region}
                    </li>
                    <li>
                      <span>Sub Region: </span>
                      {subregion}
                    </li>
                    <li>
                      <span>Capital: </span>
                      {capital}
                    </li>
                    </ul>
                      </div>
                      <div className="main-info--bottom">
            <ul>
                    <li>
                      <span>Top Level Domain: </span>
                      {topLevelDomain}
                    </li>
                    <li>
                      <span>Currency: </span>
                      {currencies[0].name}
                    </li>
                    <li>
                      <span>Languages: </span>
                      {languages.map((language) => {
                          let list = [];
                          list.push(`${language.name} `);
                          return list;
                        })}
                    </li>
                  </ul>
                        </div>
                </div>
                <div className="borders-info">
                  <span>Border Countries:</span>
                  {borders.map((border) => {
                    return <span className="border" onClick={()=>routeChange(border)}>{border}</span>;
                  })}
                </div>
              </div>
            </div>
          </div>
        );
}
}

export default Countrypage
