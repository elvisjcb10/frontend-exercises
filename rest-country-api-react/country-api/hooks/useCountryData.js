import { useEffect, useState } from "react"

const useCountryData=()=>{
  const[data,setData]=useState([]);
  const[isLoading,setIsLoading]=useState(true);
  const[error,setError]=useState();
  useEffect(()=>{
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
        .then((request)=>request.json())
        .then((data)=>setData(data))
        .catch((error)=>setError(error))
        .finally(()=>setIsLoading(false))
      
  },[])
  return {data,isLoading,error}
}
export default useCountryData
