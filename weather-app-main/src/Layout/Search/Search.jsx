import React, { useState } from 'react';
import './Search.css';
import search from '../../assets/images/icon-search.svg';
import { useShallow } from "zustand/react/shallow";
import { useWeatherStore } from '../../store/useWeatherStore';
import useFindCity from '../../Hooks/useFindCity';

function Search() {
  const [city, setCity2] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { data, isloading, error } = useFindCity(city);

  const { setLongitud, setLatitud, setCity, setCountry } = useWeatherStore(
    useShallow((state) => ({
      setLatitud: state.setLatitud,
      setLongitud: state.setLongitud,
      setCity: state.setCity,
      setCountry: state.setCountry
    }))
  );

  const handleSelectCity = (result) => {
    setLatitud(result.latitude);
    setLongitud(result.longitude);
    setCity(result.name);
    setCountry(result.country);
    setCity2("");
    setShowSuggestions(false);
  };
  const handleKeyDown=()=>{
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data?.results?.length > 0) {
      handleSelectCity(data.results[0]);
    }
  };

  return (
    <div className="search-container">
      <h1>How's the sky looking today?</h1>
      <form onSubmit={handleSubmit} className="search">
        <div className="input" style={{ position: "relative" }}>
          <img src={search} alt="" />
          <input
            value={city}
            onChange={(e) => {
              setCity2(e.target.value);
              setShowSuggestions(true);
            }}
            type="text"
            placeholder="Search for a place..."
            autoComplete="off"
            onKeyDown={handleKeyDown}
          />
          {showSuggestions && city.trim() !== "" && data?.results?.length > 0 && (
            <div className="suggestions-list">
              {data.results.slice(0, 5).map((result, index) => (
                <p
                  key={index}
                  onClick={() => handleSelectCity(result)}
                  className="suggestion-item"
                >
                  {result.name}, {result.country} 
                </p>
              ))}
            </div>
          )}
        </div>
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
