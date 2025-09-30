import style from './feature.module.css'
const Feature=({img,title,phrase})=>{
    return(
        <article className={style.container}>
            <img src={img} alt="" />
            <div className={style.text}>
                <h3>{title}</h3>
                <p>{phrase}</p>
            </div>
        </article>
    );
}
export default Feature;