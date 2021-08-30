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
    const fetchByName = async () =>{
        const fetchData = await fetch(
          `https://restcountries.eu/rest/v2/name/${nameCountry}`
        );
        const data = await fetchData.json()
        console.log(data);
        setCountries(data)
    }
    const fetchByRegion = async () =>{
        const fetchData = await fetch(
          `https://restcountries.eu/rest/v2/region/${region}`
        );
        const data = await fetchData.json();
        console.log(data);
        setCountries(data);
    }
    useEffect(() => {
        fetchAll()
    },[])
    useEffect(()=>{
        fetchByName()
    },[nameCountry])
    useEffect(()=>{
        fetchByRegion()
    },[region])
    return (
        <div className='homepage'>
        <section className="filters">
        <SearchInput setNameCountry={setNameCountry} nameCountry={nameCountry}/>
        <FilterInput region={region} setRegion={setRegion}/>
        </section>
        <section className="countries">
            {countries.length > 0 &&
            countries.map(({id,...otherProps})=>(
                <Country key={id} {...otherProps}/>
                ))}
        </section>
        </div>
    )
}

export default Homepage
