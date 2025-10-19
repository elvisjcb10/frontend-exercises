import { useState,useEffect } from "react"
import { useFindCity } from "../../Hooks/useFindCity"
import Header from "../../Layout/Header/Header";
function Home() {
  const [name,setName]=useState(null);
  const {data,isLoading,error}=useFindCity(name);
  return ( 
    <>
        <Header></Header>
    </>
  )
}

export default Home