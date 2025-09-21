import React from 'react'
import { useParams } from 'react-router-dom'

function CoinDetailsPage() {

    const {coinId} = useParams();


  return (
    <div>
        <h2>coin details page</h2>
    </div>
  )
}

export default CoinDetailsPage