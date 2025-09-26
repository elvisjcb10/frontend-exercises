import Button from "./Button";
import Input from "./Input";
import style from "./style.module.css"
import { useState } from "react";
const Calculator=({onPerson,onTotal,onSmash,onCustom,custom ,person,bill,selectedTip,setSelectedTip,handleTipClick})=>{
    let tips=[5,10,15,25,50];
    
    const handleInputClick=()=>{
        setSelectedTip(click);
    }
    const renderTips=()=>tips.map((e,index)=>
        <Button key={index} onSmash={onSmash} onSelect={handleTipClick} select={selectedTip===e}>{e}</Button>
    );
    return(
        <div className={style.container}>
            <div>
                <h3>Bill</h3>
                <Input
                    value={bill}
                    onInput={onTotal}
                    urlIcon={'../../images/icon-dollar.svg'}
                    children={0}
                ></Input>
            </div>
            <div >
                <h3>Select Tip %</h3>
                <div className={style.buttons}>
                    {renderTips()}
                    <input type="number" value={custom} onClick={handleInputClick} onChange={e=>onCustom(e.target.value)} className={style.cinput} placeholder="Custom"></input>
                </div>
            </div>
            <div>
                <h3>Person</h3>
                <Input
                    value={person}
                    onInput={onPerson}
                    urlIcon={'../../images/icon-Person.svg'}
                    children={0}
                ></Input>
            </div>
        </div>

    );
}
export default Calculator