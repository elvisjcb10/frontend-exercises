import useCountryEspecific from "../../hooks/useCountryEspecific";
import { Link ,useParams } from "react-router-dom";
import style from "./detail.module.css"
import { FaArrowLeftLong } from "react-icons/fa6";

const CountryDetail=()=>{
    const { code } = useParams(); 
    const {data,isLoading,error}=useCountryEspecific(code);
    if(error){
        return <div>{error.message}</div>
    }
    if(isLoading){
        return <div>Loadin ..</div>

    }
    return(
        <div className={style.containerDetail}>
             <div className={style.containerButon}>
                <Link className={style.back} to={"/"}> <FaArrowLeftLong></FaArrowLeftLong> Back</Link>
             </div>
             <div className={style.containerInfo}>                
                <img src={data.flags.png} className={style.img} alt="" />
                <div className={style.text}>
                    <h1>{data.name.common}</h1>
                    <div className={style.props}>
                        <p>Native Name :  {Object.values(data.name.nativeName)[0].official}</p>
                        <p>Population: {data.population}</p>
                        <p>Región: {data.region}</p>
                        <p>Sub Region : {data.subregion}</p>
                        <p>Capital: {data.capital?.[0]}</p>
                        <p className={style.p}>Currencies:{Object.values(data.currencies).map((e)=><p>{e.name}</p>)}</p>
                        <p>Top Level Domain:  {data.tld}</p>
                        <p className={style.p}>Lenguages:{Object.values(data.languages).map((e)=><p>{e}</p>)}</p>
                    </div>
                    <div className={style.bordersContainer}>
                        <p className={style.pp}>Border Countries: </p>
                        <div className={style.borders}>
                                {Object.values(data.borders).map((e)=><span className={style.span}>{e}</span>)}
                        </div>
                    </div>
                   
                </div>
             </div>
        </div>
    );
}
export default CountryDetail