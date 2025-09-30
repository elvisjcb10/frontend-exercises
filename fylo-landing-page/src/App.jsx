import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Features from './components/Features/Feature'
import About from './components/about/About'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
