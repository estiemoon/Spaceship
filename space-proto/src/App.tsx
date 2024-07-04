import { useState } from 'react'
import './App.css'
import Seats from './components/seats/seats'

function App() {

  const [countPerson, setCountPerson] = useState(0);

  return (
    <>
      <Seats countPerson = {countPerson} />

    </>
  )
}

export default App
