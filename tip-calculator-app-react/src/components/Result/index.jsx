import style from "./style.module.css"

const Result=({tipAmount,total,onClick})=>{
    return(
        <div className={style.container}>
            <div className={style.containerTotal}>
                <div className={style.total}>
                    <h4 className={style.text}>Tip Amount <span>/ person</span></h4>
                    <h3>${tipAmount.toFixed(2)}</h3>
                </div>
                <div className={style.total} >
                    <h4 className={style.text}>Total <span>/ person</span></h4>
                    <h3>${total.toFixed(2)}</h3>
                </div>
            </div>
            <button onClick={onClick}  className={style.reset}>RESET</button>
            
        </div>
    );
}
export default Result;