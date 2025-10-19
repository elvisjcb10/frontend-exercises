import React from 'react'
import './Search.css'
import search from '../../assets/images/icon-search.svg'
function Search({handleSubmnit,setCity,city}) {
  return (
    <div className='search-container'>
        <h1>How's the sky looking today?</h1>
        <form onSubmit={handleSubmnit} className='search'>
            <div className='input'>
                <img src={search} alt="" />
                <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder='Search for a place...' />
            </div>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Search