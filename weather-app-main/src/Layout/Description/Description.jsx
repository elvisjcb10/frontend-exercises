import React from 'react'
import loading from '../../assets/images/icon-loading.svg'
import './Description.css'
import useWeather from '../../Hooks/useWeather'
import {useShallow} from "zustand/react/shallow"
import { useWeatherStore } from '../../store/useWeatherStore'
import CardDescription from './components/CardDescription/CardDescription'
import CardDaily from './components/CardDaily/CardDaily'
import useDaily from '../../Hooks/useDaily'
import useHourly from '../../Hooks/useHourly'
import Hourly from './Hourly/Hourly'
import CardHourly from './components/CardHourly/CardHourly'
import getWeatherIcon from '../../Hooks/getWeatherIcon'
function Description() {
  const { longitud, latitud,temperature,windSpeed,precipitacion,city,country } = useWeatherStore(
    useShallow((state) => ({
      longitud: state.longitud,
      latitud: state.latitud,
      temperature: state.temperature,
      windSpeed: state.windSpeed,
      precipitacion: state.precipitacion,
      city:state.city,
      country:state.country
    }))
  );

  const {data,isLoading,error}=useWeather(latitud,longitud,windSpeed,temperature,precipitacion);
  const daily = data?.daily ? useDaily(data.daily) : ["","","","","","",""];
  const placeholderHours = Array(24).fill({ weather: "", temp:"" , hour: "" });
  const hourly = !isLoading && data?.hourly
    ? useHourly(data.hourly)
  : new Map([["_", placeholderHours]]);  
  if(error) return(<div>{error.message}</div>)  
  
  const getday=(date)=>{
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day=new Date(date);
    return dayNames[day.getDay()];
  }
  const getDay=(date)=>{    
    const day=new Date(date);
    const dia = day.getDate();      
    return dia;   

  }
  const getMonth=(date)=>{
    const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const day=new Date(date);
    const mes = day.getMonth();   
    return meses[mes];
  }  
  const getYear=(date)=>{
    const day=new Date(date);
    const año = day.getFullYear();
    return año;
  }  
  console.log( data );
  return (
    <main className='container'>
        <div className='description'>
            <div className={isLoading? "loading":"description-text"}>
                 {isLoading ? (
                    <>
                      <h2>Loading...</h2>
                    </>
                  ) : (
                    <>
                      <div>
                        <h2>{city}, {country}</h2>
                        <p>{getday(data.current.time)},{getMonth(data.current.time)} {getDay(data.current.time)},{getYear(data.current.time)}</p>
                      </div>
                      <img src={getWeatherIcon(data.current.weather_code)} alt="" />
                      <h1>{data.current.temperature_2m}°</h1>
                    </>
                  )}
            </div>
            <div className='cards-description'>
                <CardDescription text={"Feels Like"} 
                     number={isLoading? "_":data.current.temperature_2m + "°"} />
                <CardDescription text={"Humidity"} 
                    number={isLoading? "_":data.current.relative_humidity_2m + "%"} />
                <CardDescription text={"Wind"} 
                    number={isLoading? "_":data.current.wind_speed_10m +" "+ data.current_units.wind_speed_10m}/>
                <CardDescription text={"Precipitation"} 
                    number={isLoading? "_":data.current.precipitation+" " + `${data.current_units.precipitation==="inch"?"in":"mm"}`}/>
            </div>
        </div>
        <div className='daily'>
          <h3>Daily Forecast</h3>
          <div className='daily-container'>
             {daily.map((day)=>(
               <CardDaily day={day.dayName} img={day.weather} maxTemperature={day.tempMax} minTemperature={day.tempMin} ></CardDaily>
             ))}
          </div> 
        </div>
        <div className='hourly'>
          <Hourly HourlyData={hourly}/>
        </div>

    </main>
  )
}

export default Description