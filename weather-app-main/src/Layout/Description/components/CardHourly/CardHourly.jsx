import React from 'react'
import './CardHourly.css'
function CardHourly({img,temperature,time}) {
  return (
    <div className='hourlycontainer'>
        <img src={img} alt="" />
        <p>{time}</p>
        <p>{temperature}</p>
    </div>
  )
}

export default CardHourly