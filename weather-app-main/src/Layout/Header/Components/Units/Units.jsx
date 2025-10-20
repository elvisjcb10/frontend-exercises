import React from 'react'
import { useState } from 'react';
import './Units.css'
import ckeckmark from '../../../../assets/images/icon-checkmark.svg'
import { useWeatherStore } from '../../../../store/useWeatherStore';
import { useShallow } from 'zustand/react/shallow';
import { useEffect } from 'react';
function Units({hidden}) {
    const [temp,setTemp]=useState("celsius");
    const [wind,setWind]=useState("kmh");
    const [prec,setPrec]=useState("mm");
    const { setTemperature, setWindSpeed,setPrecipitacion } = useWeatherStore(
          useShallow((state) => ({
            setTemperature:state.setTemperature,
            setWindSpeed:state.setWindSpeed,
            setPrecipitacion:state.setPrecipitacion
          }))
    );
    useEffect(()=>{
        setTemperature(temp);
        setPrecipitacion(prec);
        setWindSpeed(wind);

    },[temp,wind,prec])
    return (
        <div className={`units ${hidden}`}>
            <h3>Switch to Imperial</h3>
            <div className="temp unit">
                <p>Temperature</p>
                <label className='selection'>
                    Celsius (°C)
                    <input  type="radio" name="temp" onChange={()=>setTemp("celsius")} checked={temp==="celsius"}/>
                    {temp==="celsius" && <img src={ckeckmark} alt="" />}
                </label>
                <label className='selection'>
                    Fahrenheit (°F)
                    <input type="radio" name="temp" onChange={()=>setTemp("fahrenheit")} checked={temp==="fahrenheit"}/>
                    {temp==="fahrenheit" && <img src={ckeckmark} alt="" />}
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
                    <input type="radio" name="prec" onChange={()=>setPrec("inch")} checked={prec==="inch"}/> 
                    {prec==="inch" && <img src={ckeckmark} alt="" />}
                </label>
            </div>
        </div>
    )
}

export default Units