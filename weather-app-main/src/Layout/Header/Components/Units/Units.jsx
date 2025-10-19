import React from 'react'
import { useState } from 'react';
import './Units.css'
import ckeckmark from '../../../../assets/images/icon-checkmark.svg'
function Units({hidden,setTemp,setPrec,setWind,temp,prec,wind}) {

    return (
        <div className={`units ${hidden}`}>
            <h3>Switch to Imperial</h3>
            <div className="temp unit">
                <p>Temperature</p>
                <label className='selection'>
                    Celsius (°C)
                    <input type="radio" name="temp" onChange={()=>setTemp("c")} checked={temp==="c"}/>
                    {temp==="c" && <img src={ckeckmark} alt="" />}
                </label>
                <label className='selection'>
                    Fahrenheit (°F)
                    <input type="radio" name="temp" onChange={()=>setTemp("f")} checked={temp==="f"}/>
                    {temp==="f" && <img src={ckeckmark} alt="" />}
                </label>
            </div>
            <div className="wind unit">
                <p>Wind Speed</p>
                <label className='selection'>
                    km/h
                    <input type="radio" name="wind" onChange={()=>setWind("kmh")} checked={wind==="kmh"}/>
                    {wind==="kmh" && <img src={ckeckmark} alt="" />}
                </label>
                <label className='selection'>
                    mph
                    <input type="radio" name="wind" onChange={()=>setWind("mph")} checked={wind==="mph"}/> 
                    {wind==="mph" && <img src={ckeckmark} alt="" />}
                </label>
            </div>

            <div className="prec unit">
                <p>Precipitation</p>
                <label className='selection'>
                    Millimeters (mm)
                    <input type="radio" name="prec" onChange={()=>setPrec("mm")} checked={prec==="mm"}/>
                    {prec==="mm" && <img src={ckeckmark} alt="" />}
                </label>
                <label className='selection'>
                    Inches (in)
                    <input type="radio" name="prec" onChange={()=>setPrec("in")} checked={prec==="in"}/> 
                    {prec==="in" && <img src={ckeckmark} alt="" />}
                </label>
            </div>
        </div>
    )
}

export default Units