import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Layout/Header/Header'
import Search from './Layout/Search/Search'
import useFindCity from './Hooks/useFindCity'
import Description from './Layout/Description/Description'
function App() {
  const [city, setCity] = useState("")
  const {data,isloading,error}=useFindCity(city);
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(city)
    console.log(data);
    setCity("");
  }
  return (
    <>
        <Header></Header>
        <Search handleSubmnit={handleSubmit} setCity={setCity} city={city}></Search>
        
    </>
  )
}

export default App
