import style from "./style.module.css"
import { Link } from "react-router-dom";
const Country=({image,name,population,region,capital,code})=>{
    
    return(
        <Link to={`/detail/${code}`}>
          <div className={style.container}>
            <img className={style.img} src={image} alt="imagen" />
            <div className={style.info}>
              <h2 className={style.name}>{name}</h2>
              <div>
                  <p>Poblacion: <span>{population.toLocaleString()}</span></p>
                  <p>Region: <span>{region}</span></p>
                  <p>Capital: <span>{capital}</span></p>
              </div>
            </div>
          </div>
        </Link>
    );
}
export default Country