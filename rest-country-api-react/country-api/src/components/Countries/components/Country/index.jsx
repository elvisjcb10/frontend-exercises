import style from "./style.module.css"
const Country=({image,name,population,region,capital})=>{
    
    return(
        <div className={style.container}>
          <img className={style.img} src={image} alt="imagen" />
          <div className={style.info}>
            <h2 className={style.name}>{name}</h2>
            <div>
                <p>Poblacion: {population.toLocaleString()}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
          </div>
        </div>
    );
}
export default Country