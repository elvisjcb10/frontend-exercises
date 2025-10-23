import React from 'react'
import './Search.css'
import search from '../../assets/images/icon-search.svg'
import {useShallow} from "zustand/react/shallow"
import { useWeatherStore } from '../../store/useWeatherStore'
import { useState  } from 'react'   
import useFindCity from '../../Hooks/useFindCity'
function Search() {
  const [city, setCity2] = useState("")
  const {data,isloading,error}=useFindCity(city);
  const { setLongitud, setLatitud,setCity,setCountry } = useWeatherStore(
      useShallow((state) => ({
        setLatitud:state.setLatitud,
        setLongitud:state.setLongitud,
        setCity:state.setCity,
        setCountry:state.setCountry
      }))
  );
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data);
    console.log(data.results[0].latitude);
    setLatitud(data.results[0].latitude);
    setLongitud(data.results[0].longitude);
    setCity(data.results[0].name);
    setCountry(data.results[0].country);
    setCity2("");
  }
  return (
    <div className='search-container'>
        <h1>How's the sky looking today?</h1>
        <form onSubmit={handleSubmit} className='search'>
            <div className='input'>
                <img src={search} alt="" />
                <input value={city} onChange={(e)=>setCity2(e.target.value)} type="text" placeholder='Search for a place...' />
            </div>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Search