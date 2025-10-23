  import React, { useState } from 'react'
  import CardHourly from '../components/CardHourly/CardHourly';
  import './Hourly.css'
import { HiOutlineAcademicCap } from 'react-icons/hi';
  function Hourly({HourlyData}) {
    const days = [...HourlyData.keys()];
    const [firstKey] = days;
    const [day, setDay] = useState(firstKey);
    
    const hours = HourlyData.get(day) || HourlyData.get(firstKey);
    const handleChange=(e)=>{
        setDay(e.target.value)
    }
    return (
      <>
          <div className='hourly-day'>
              <h3>Hourly forecast</h3>
              <select name="" id="" onChange={handleChange}>
                  {days.map((e)=>(
                    <option  value={e}>{e}</option>
                  ))}
              </select>
          </div>
          <div className='hourlys'>
              {hours.map((e, i) => (
              <CardHourly key={i} img={e.weather} time={e.hour} temperature={e.temp} />
              ))}
          </div>
      </>
    )
  }

  export default Hourly