
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
/*
import Home from '../pages/Home'
import CoinDetailsPage from '../pages/CoinDetailsPage'
 */
import Layout from '../pages/Layout'
import {Facebook} from 'react-content-loader'

const Home = lazy(() => import('../pages/Home'))
const CoinDetailsPage = lazy(() => import('../pages/CoinDetailsPage'))

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={
          <Suspense fallback={<Facebook />}>
            <Home />
          </Suspense>
        } />  {/* index - is same as path="/", just to make things simple */}

        <Route path='/details/:coinId' element={
          <Suspense fallback={<Facebook />}>          {/*Suspense -> we are wrapping the CoinDetails page in Suspense because we want to show something till any item is downloaded. */}
            <CoinDetailsPage />
          </Suspense>
        } />

      </Route>

    </Routes>
  )
}

export default Routing