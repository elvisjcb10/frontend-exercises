import React from 'react'
import './CardDaily.css'
function CardDaily({day,img,maxTemperature,minTemperature}) {
  return (
    <div className='cardDaily'>
        <h3>{day}</h3>
        <img src={img} alt="" />
        <p><span>{maxTemperature?maxTemperature+"°":""}</span> <span>{minTemperature?minTemperature+"°":""}</span></p>
    </div>
  )
}

export default CardDaily