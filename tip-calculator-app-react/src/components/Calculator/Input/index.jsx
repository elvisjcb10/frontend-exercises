import style from './style.module.css';
const Input=({urlIcon,children,onInput,value})=>{
    return(
        <div className={style.container}>
            <img src={urlIcon} alt="" />
            <input 
                type='number'
                placeholder={children} 
                value={value}
                onChange={e => onInput(e.target.value)} 
            ></input>
        </div>
    );

}
export default Input;