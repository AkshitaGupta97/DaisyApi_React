import React from 'react'
import Navbar from '../Components/CoinTable/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />  {/* Outlet is the placeholder for other components */}
    </>
  )
}

export default Layout