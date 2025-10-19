import React from 'react'
import logo from "../../assets/images/logo.svg"
import { useState } from 'react'
import './Header.css'
import Units from './Components/Units/Units'
import arrow from '../../assets/images/icon-dropdown.svg'
import units from '../../assets/images/icon-units.svg'
function Header() {
  const [isDropdown,setDropdown]=useState(false);
  const [closing, setClosing] = useState(false);
  const [temp,setTemp]=useState("c");
  const [wind,setWind]=useState("kmh");
  const [prec,setPrec]=useState("mm");
  const toggleDropdown = () => {
    if (isDropdown) {
      setClosing(true);
      setTimeout(() => {
        setDropdown(false);
        setClosing(false);
      }, 250);
    } else {
      setDropdown(true);
    }
  };
  return (
    <header className='header'>
      <div className='header-container'>
        <img src={logo} alt="" />
        <div onClick={toggleDropdown} className='dropdown'>
          <img src={units} alt="" />
          Units
          <img src={arrow} alt="" />
        </div>
        {isDropdown && <Units 
          prec={prec}
          temp={temp}
          wind={wind}
          setPrec={setPrec}
          setTemp={setTemp}
          setWind={setWind}
          hidden={closing ? "hidden" : ""} />}      
      </div>
    </header>
  )
}

export default Header