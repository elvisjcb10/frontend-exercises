import Country from "./components/country";
import useCountryData from "../../../hooks/useCountryData";
import style from "./style.module.css"
const Countries=({searchTerm})=>{
    const {data,isLoading,error}=useCountryData();
    const renderCountries=()=>{
        let counFiltered=data;

        if(searchTerm.length>0){
            counFiltered=counFiltered.filter((item)=>item.name.official.toLowerCase().includes(searchTerm));

        }
        return counFiltered.map((itm)=>(
            <Country
                key={itm.name.official}
                image={itm.flags.png}
                name={itm.name.common}
                population={itm.population}
                region={itm.region}
                capital={itm.capital[0]}
            />
        ));
    };
    console.log(error);
    if(error){
        return <div>Error:{error.message}</div>
    }
    if(isLoading){
        return <div>Loading...</div>
    }
    return(
        <div className={style.container}>
            {renderCountries()}
        </div>
    );
}
export default Countries;