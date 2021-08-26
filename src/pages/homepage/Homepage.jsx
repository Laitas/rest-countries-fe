import React,{useState,useEffect} from 'react'
import Country from '../../components/Country/Country';
import FilterInput from '../../components/FilterInput/FilterInput';
import SearchInput from '../../components/SearchInput/SearchInput';
import './Homepage.scss'
const Homepage = () => {
    const [countries,setCountries] =useState([]);
    const [region,setRegion] = useState('')
    const [nameCountry,setNameCountry] = useState('')
    const fetchAll = async () =>{
        const fetchData = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await fetchData.json()
        let displayData = [];
        for(let i = 0; i < 8; i++){
            displayData.push(data[Math.floor(Math.random() * data.length)]);
        }
        setCountries(displayData)
    }
    useEffect(() => {
        fetchAll()
    },[])
    return (
        <>
        <section className="filters">
        <SearchInput/>
        <FilterInput/>
        </section>
        <section className="countries">
            {countries.map(({id,...otherProps})=>(
                <Country key={id} {...otherProps}/>
                ))}
        </section>
                </>
    )
}

export default Homepage
