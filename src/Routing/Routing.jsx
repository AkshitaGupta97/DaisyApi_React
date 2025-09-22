
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import CoinDetailsPage from '../pages/CoinDetailsPage'
import Layout from '../pages/Layout'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />  {/* index - is same as path="/", just to make things simple */}
          <Route path='/details/:coinId' element={<CoinDetailsPage />} />
        </Route>
        
    </Routes>
  )
}

export default Routing