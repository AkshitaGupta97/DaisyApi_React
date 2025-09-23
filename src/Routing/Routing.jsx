
import { Route, Routes } from 'react-router-dom'
import { lazy, Lazy } from 'react'
/*
import Home from '../pages/Home'
import CoinDetailsPage from '../pages/CoinDetailsPage'
 */
import Layout from '../pages/Layout'

const Home = lazy(() => import('../pages/Home'))
const CoinDetailsPage = lazy(() => import('../pages/CoinDetailsPage'))

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />  {/* index - is same as path="/", just to make things simple */}
        <Route path='/details/:coinId' element={<CoinDetailsPage />} />

      </Route>

    </Routes>
  )
}

export default Routing