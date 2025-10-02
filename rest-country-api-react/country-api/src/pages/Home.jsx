import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Countries from '../components/Countries'
import { useState } from 'react'
import "./home.css"
const Home=()=>{
    const [searchTerm,setSearchTerm]=useState('');
    const handleNavbarSearch=(term)=>{
        setSearchTerm(term);
        
    };
    return(
        <div>
            <div className='search-container'>
                <Search onSearch={handleNavbarSearch}></Search>
                <Filter  ></Filter>
            </div>
            <div>
                <Countries searchTerm={searchTerm}></Countries>
            </div>
        </div>
    );
}
export default Home;