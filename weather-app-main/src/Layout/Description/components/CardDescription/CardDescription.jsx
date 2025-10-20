import React from 'react'
import './CardDescription.css'
function CardDescription({text,number,unit}) {
  return (
    <div className='Description-container'> 
        <h3>{text}</h3>  
        <p><span>{number}</span><span>{unit}</span></p>
    </div>
  )
}

export default CardDescription