import React from 'react'
import Navbar from '../Components/CoinTable/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import CoinTable from '../Components/CoinTable/CoinTable'

function Home() {
    return (
        <div>
            <Navbar  />
            <Banner />
            <CoinTable/>
        </div>
    )
}

export default Home