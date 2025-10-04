import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Score from './components/Score/Score'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx/Home'
import Hero from './components/Hero/Hero'
import Game from './Pages/Game/Game'
function App() {
  
  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
