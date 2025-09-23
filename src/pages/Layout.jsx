
import Navbar from '../Components/CoinTable/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Navbar /> {/* Navbar is shared layout on all pages */}
        <Outlet />  {/* Outlet is the placeholder for other components, is actual page rendered along with navbar */}
    </>
  )
}

export default Layout