import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Layout/Header/Header'
import Search from './Layout/Search/Search'
import useFindCity from './Hooks/useFindCity'
import Description from './Layout/Description/Description'
function App() {
 
  return (
    <>
        <Header></Header>
        <Search ></Search>
        <Description></Description>
    </>
  )
}

export default App
