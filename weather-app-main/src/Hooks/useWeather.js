import { useState,useEffect } from "react";
const useWeather=(latitude,longitude,wind,temperature,precipitation)=>{
    const [data,setData]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const usingFecth=async ()=>{
            setIsLoading(true);
            setError(null)
            try{
                const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&wind_speed_unit=${wind}&temperature_unit=${temperature}&precipitation_unit=${precipitation}`
                );
                const responseJson=await response.json();
                setData(responseJson);
            }
            catch(error){
                setError(error)
            }
            finally{
                setIsLoading(false);
            }
        }
        usingFecth();
    },[latitude,longitude,wind,temperature,precipitation])
    return {data,isLoading,error};
}
export default useWeather;