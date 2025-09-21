
//import { useState } from 'react'
import './App.css'
//import Home from './pages/Home'
import Routing from './Routing/Routing'
//import { CurrencyContext } from './Context/createContext'

function App() {

 // const [currency, setCurrency] = useState('usd')

  return (
   <>
   {/*
    <CurrencyContext.Provider value={{currency, setCurrency}}>
      <Home />
    </CurrencyContext.Provider>
    */}
    <Routing/> 
   </>
  )
}

export default App
