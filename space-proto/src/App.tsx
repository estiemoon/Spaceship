import { useState } from 'react'
import './App.css'
import Seats from './components/seats/seats'
import { line, line_text } from './App.css';
import PriceContainer from './components/priceContainer/priceContainer';

function App() {

  const [countPerson, setCountPerson] = useState(0);
  const [limitPerson, setLimitPerson] = useState(0);

  return (
    <>
      <div className = {line}>
        <div className={line_text}>1st</div>
        <Seats  countPerson = {countPerson} 
              limitPerson={limitPerson}
              setCountPerson = {setCountPerson} />
        </div>

        <div className = {line}>
        <div className={line_text}>2nd</div>
        <Seats  countPerson = {countPerson} 
              limitPerson={limitPerson}
              setCountPerson = {setCountPerson} />
        </div>

        <PriceContainer
          limitPerson = {limitPerson}
          countPerson = {countPerson}
          setLimitPerson = {setLimitPerson}/>

    </>
  )
}

export default App
