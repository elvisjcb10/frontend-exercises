import style from "./coments.module.css"
const Coments=({coment,imgPerfil,name,status})=>{
    return(
        <article className={style.container} >
            <p>{coment}</p>
            <div className={style.comment}>
                <img className={style.img} src={imgPerfil} alt="" />
                <div>
                    <h4>{name}</h4>
                    <p>{status}</p>
                </div>
            </div>
        </article>  
    );
}
export default Coments