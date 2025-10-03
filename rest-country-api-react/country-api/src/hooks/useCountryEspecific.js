import { useEffect, useState } from "react"

const useCountryEspecific=(country)=>{
  const[data,setData]=useState([]);
  const[isLoading,setIsLoading]=useState(true);
  const[error,setError]=useState();
  useEffect(()=>{
    setIsLoading(true);
    fetch( `https://restcountries.com/v3.1/alpha/${country}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
        .then((request)=>request.json())
        .then((data)=>setData(data))
        .catch((error)=>setError(error))
        .finally(()=>setIsLoading(false))
      
  },[])
  return {data,isLoading,error}
}
export default useCountryEspecific