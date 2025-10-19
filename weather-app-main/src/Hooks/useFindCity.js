import { useState,useEffect } from "react";
const useFindCity=(name)=>{
    const [data,setData]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const usingFecth=async ()=>{
            setIsLoading(true);
            setError(null)
            try{
                const response= await fetch(`https://customer-geocoding-api.open-meteo.com/v1/search?apikey=&name=${name}&count=1`);
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
    },[name])
    return {data,isLoading,error};
}
export default useFindCity;