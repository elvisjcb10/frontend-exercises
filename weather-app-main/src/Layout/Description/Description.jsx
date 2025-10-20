import React from 'react'
import loading from '../../assets/images/icon-loading.svg'
import './Description.css'
import useWeather from '../../Hooks/useWeather'
import {useShallow} from "zustand/react/shallow"
import { useWeatherStore } from '../../store/useWeatherStore'
import CardDescription from './components/CardDescription/CardDescription'
import CardDaily from './components/CardDaily/CardDaily'
import CardHourly from './components/CardHourly/CardHourly'
import useDaily from '../../Hooks/useDaily'
function Description() {
  const { longitud, latitud,temperature,windSpeed,precipitacion } = useWeatherStore(
    useShallow((state) => ({
      longitud: state.longitud,
      latitud: state.latitud,
      temperature: state.temperature,
      windSpeed: state.windSpeed,
      precipitacion: state.precipitacion,
    }))
  );
  const {data,isLoading,error}=useWeather(latitud,longitud,windSpeed,temperature,precipitacion);
  const daily=
  const hourlyCards = [];
  for (let i = 1; i <= 24; i++) {
    const period = i < 12 || i === 24 ? "AM" : "PM";
    const hour = i % 12 === 0 ? 12 : i % 12;
    hourlyCards.push(`${hour} ${period}`);
  }
  if(isLoading) return(<div>isloading...</div>)
  if(error) return(<div>{error.message}</div>)
  
  return (
    <main className='container'>
        <div className='description'>
            <div className='description-text'>

            </div>
            <div className='cards-description'>
                <CardDescription text={"Feels Like"} number={"-"} />
                <CardDescription text={"Humidity"} number={"-"}/>
                <CardDescription text={"Wind"} number={"-"}/>
                <CardDescription text={"Precipitation"} number={"-"}/>
            </div>
        </div>
        <div className='daily'>
          <h3>Daily Forecast</h3>
          <div className='daily-container'>
             <CardDaily></CardDaily>
             <CardDaily></CardDaily>
             <CardDaily></CardDaily>
             <CardDaily></CardDaily>
             <CardDaily></CardDaily>
             <CardDaily></CardDaily>
             <CardDaily></CardDaily>
          </div> 
        </div>
        <div className='hourly'>
             <div className='hourly-day'>
                <h3>Hourly forecast</h3>
             </div>
             <div className='hourlys'>
                {hourlyCards.map((value)=>(
                  <CardHourly time={`${value}`}></CardHourly>
                ))}
             </div>
        </div>

    </main>
  )
}

export default Description