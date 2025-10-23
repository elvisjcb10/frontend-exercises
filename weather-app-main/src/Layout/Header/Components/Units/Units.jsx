import React from 'react'
import { useState } from 'react';
import './Units.css'
import ckeckmark from '../../../../assets/images/icon-checkmark.svg'
import { useWeatherStore } from '../../../../store/useWeatherStore';
import { useShallow } from 'zustand/react/shallow';
import { useEffect } from 'react';
function Units({hidden}) {
    const { setTemperature, setWindSpeed,setPrecipitacion,temperature,windSpeed,precipitacion } = useWeatherStore(
          useShallow((state) => ({
            setTemperature:state.setTemperature,
            setWindSpeed:state.setWindSpeed,
            setPrecipitacion:state.setPrecipitacion,
            temperature:state.temperature,
            windSpeed:state.windSpeed,
            precipitacion:state.precipitacion
          }))
    );
    return (
        <div className={`units ${hidden}`}>
            <h3>Switch to Imperial</h3>
            <div className="temp unit">
                <p>Temperature</p>
                <label className='selection'>
                    Celsius (°C)
                    <input  type="radio" name="temp" onChange={()=>setTemperature("celsius")} checked={temperature==="celsius"}/>
                    {temperature==="celsius" && <img src={ckeckmark} alt="" />}
                </label>
                <label className='selection'>
                    Fahrenheit (°F)
                    <input type="radio" name="temp" onChange={()=>setTemperature("fahrenheit")} checked={temperature==="fahrenheit"}/>
                    {temperature==="fahrenheit" && <img src={ckeckmark} alt="" />}
                </label>
            </div>
            <div className="wind unit">
                <p>Wind Speed</p>
                <label className='selection'>
                    km/h
                    <input type="radio" name="wind" onChange={()=>setWindSpeed("kmh")} checked={windSpeed==="kmh"}/>
                    {windSpeed==="kmh" && <img src={ckeckmark} alt="" />}
                </label>
                <label className='selection'>
                    mph
                    <input type="radio" name="wind" onChange={()=>setWindSpeed("mph")} checked={windSpeed==="mph"}/> 
                    {windSpeed==="mph" && <img src={ckeckmark} alt="" />}
                </label>
            </div>

            <div className="prec unit">
                <p>Precipitation</p>
                <label className='selection'>
                    Millimeters (mm)
                    <input type="radio" name="prec" onChange={()=>setPrecipitacion("mm")} checked={precipitacion==="mm"}/>
                    {precipitacion==="mm" && <img src={ckeckmark} alt="" />}
                </label>
                <label className='selection'>
                    Inches (in)
                    <input type="radio" name="prec" onChange={()=>setPrecipitacion("inch")} checked={precipitacion==="inch"}/> 
                    {precipitacion==="inch" && <img src={ckeckmark} alt="" />}
                </label>
            </div>
        </div>
    )
}

export default Units