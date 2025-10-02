import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' // 👈 falta esto
import { useState } from 'react'
import style from './style.module.css'
const Search=({onSearch})=>{
     const[search,setSearch]=useState('');//pra inputs siempr es '' sino undifined
        const handleInputChange=(evt)=>{
            setSearch(evt.target.value);
            
        };
        const handleInputKeyDown=(evt)=>{
            if(evt.key==='Enter'){
                onSearch(search);
            }
            
        };
    return(
        <div className={style.container}>
            <FontAwesomeIcon className={style.icon} icon={faMagnifyingGlass} />
            <input 
                className={style.input} 
                placeholder="Search for a country..." 
                value={search}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            ></input>
        </div>
    );
}
export default Search;