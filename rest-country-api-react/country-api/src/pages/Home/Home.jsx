import NavBar from '../../components/NavBar'
import Search from '../../components/Search'
import Filter from '../../components/Filter'
import Countries from '../../components/Countries'
import { useState } from 'react'
import "./home.css"
const Home=()=>{
    const [searchTerm,setSearchTerm]=useState('');
    const [region,setRegion]=useState(null);
    const handleNavbarSearch=(term)=>{
        setSearchTerm(term);
        
    };
    const handleChangeRegion=(region)=>{
        setRegion(region)
    }
    return(
        <div>
            <div className='search-container'>
                <Search onSearch={handleNavbarSearch}></Search>
                <Filter handleChangeRegion={handleChangeRegion} ></Filter>
            </div>
            <div>
                <Countries searchTerm={searchTerm} region={region}></Countries>
            </div>
        </div>
    );
}
export default Home;