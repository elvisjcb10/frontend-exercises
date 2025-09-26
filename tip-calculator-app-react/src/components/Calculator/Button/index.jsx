import style from "./style.module.css"
import { useState } from "react";
const Button=({children,onSmash,select,onSelect})=>{
    
    const handleClick = (e) => {
        onSelect(children); 
        onSmash(e);         
    };
    return(
        <button className={` ${style.button} ${select ? style.buttonclikeado : ""} `}  onClick={handleClick} value={children}>{children}%</button>
    );
}
export default Button