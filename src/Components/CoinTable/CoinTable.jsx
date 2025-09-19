import React, { useEffect, useState } from 'react'
import { fetchCoinData } from '../../Services/fetchCoinData'
import { useQuery } from '@tanstack/react-query';

function CoinTable() {
  /*
  useEffect(() => {
    fetchCoinData()})
   */
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['coins', page],
    queryFn: () => fetchCoinData(page, 'usd'),
    //retry: 2,
    //retryDelay: 1000,
    cacheTime: 1000 * 60 * 2
  });

  useEffect(() => {
    console.log(data);
  }, [data])

  if (isLoading) {
    return <h2>Loading ... </h2>
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>
  }


  return (
    <div className='my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto'>

      <div className='w-full bg-yellow-400 text-black flex py-4 font-semibold items-center justify-around border-r-2'>
        <div className='baiss-[35%]'>Coin</div>
        <div className='baiss-[25%]'>Price</div>
        <div className='baiss-[20%]'>24hr change</div>
        <div className='baiss-[15%]'>Market Cap</div>
      </div>

      <div className='flex flex-col w-[80vw] mx-auto'>
        {
          data.map((coin) => {
            return(
              <div key={coin.id} className='w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between'>
                <div className='flex items-center justify-start gap-3 basis-[35%]'>

                  <div className='w-[5rem] h-[5rem]'>
                    <img src={coin.image} className='w-full h-full'
                     alt="coin-images" />
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default CoinTable