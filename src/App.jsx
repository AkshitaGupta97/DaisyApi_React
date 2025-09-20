
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import CoinTable from './Components/CoinTable/CoinTable'
import Navbar from './Components/CoinTable/Navbar/Navbar'

function App() {

  const [currency, setCurrency] = useState('usd')

  return (
   <>
    <Navbar setCurrency={setCurrency} />
    <Banner />
    {currency}
    <CoinTable  currency={currency}/>
   </>
  )
}

export default App
