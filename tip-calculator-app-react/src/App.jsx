import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator'
import Result from './components/Result'
function App() {
  const [tipAmount,setTipAmount]=useState(0);
  const [total,setTotal]=useState(0);
  const [bill,setBill]=useState("");
  const [nperson,setNPerson]=useState("");
  const [tip,setTip]=useState(1);
  const [custom,setCustom]=useState("");
  const [selectedTip, setSelectedTip] = useState(null);
  const handleTipClick = (value) => {
        setSelectedTip(value);  
    };
  const handleBill=(value)=>{
    setBill(value);
  }
  const handlePerson=(value)=>{
    setNPerson(value);
  }
  const handleClick=(e)=>{
    e.stopPropagation()
    console.log(e.currentTarget);
    setTip(e.currentTarget.value)
    setCustom("");
  }
  const handleCustom=(value)=>{
    setCustom(value)
  }
  const handleClickReset=()=>{
    setTipAmount(0);
    setTotal(0);
    setBill("");
    setNPerson("");
    setTip(1);
    setCustom("");
    setSelectedTip(null);
  }
  useEffect(() => {
    const tip_real=custom>0?custom:tip;

    const tip_amount_person=(bill*tip_real)/(100*(nperson>0?nperson:1))
    const total_person=(bill/(nperson>0?nperson:1))+tip_amount_person
    setTipAmount(tip_amount_person);
    setTotal(total_person);
  }, [bill, nperson,tip,custom]);
  
  return (
    
    <div className='container'>
      <Calculator 
        handleTipClick={handleTipClick}
        setSelectedTip={setSelectedTip}
        selectedTip={selectedTip}
        bill={bill}
        custom={custom}
        onSmash={handleClick}
        className='calulator'
        person={nperson}
        onPerson={handlePerson}
        onTotal={handleBill}
        onCustom={handleCustom}>
      </Calculator>
      <Result
        onClick={handleClickReset}
        total={total}
        tipAmount={tipAmount}
        className='result'

      ></Result>
    </div>
  )
}

export default App
