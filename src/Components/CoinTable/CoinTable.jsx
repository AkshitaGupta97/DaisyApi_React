import React, { useContext, useEffect, useState } from 'react'
import { fetchCoinData } from '../../Services/fetchCoinData'
import { useQuery } from '@tanstack/react-query';
//import { CurrencyContext } from '../../Context/createContext';
import CurrencyStore from '../../zustand/store';
import { useNavigate } from 'react-router-dom';

function CoinTable() {
  //const {currency} = useContext(CurrencyContext)
  const {currency} = CurrencyStore();
  /*
  useEffect(() => {
    fetchCoinData()})
   */
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['coins', page, currency],
    queryFn: () => fetchCoinData(page, currency),
    //retry: 2,
    //retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000*60*2 // means no more fetching of data for already fetched data.
  });

   /*
    useEffect(() => {
    console.log(data);
  }, [data])

    */
  if (isLoading) {
    return <h2 className='text-3xl font-semibold text-blue-400'>Loading ... </h2>
  }
  if (isError) {
    return <h2 className='text-3xl text-red-600'>Error: {error.message}</h2>
  }

  const navigate = useNavigate();

  function handleCoinRedirect(id){
    navigate(`/details/${id}`);
  }


  return (
    <div className='my-5 flex flex-col items-center justify-center py-1 gap-5 w-[80vw] mx-auto'>

      <div className='w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-around  '>
        <div className='baiss-[35%]'>Coin</div>
        <div className='baiss-[25%]'>Price</div>
        <div className='baiss-[20%]'>24hr change</div>
        <div className='baiss-[15%]'>Market Cap</div>
      </div>

      <div className='flex flex-col w-[80vw] mx-auto'>
        {
          data?.map((coin) => {
            return(
              <div onClick={() => handleCoinRedirect(coin.id)} key={coin.id} className='w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer'>
                <div className='flex items-center justify-start gap-3 basis-[35%]'>

                  <div className='w-[5rem] h-[5rem]'>
                    <img src={coin.image} className='w-full h-full'
                     alt="coin-images" />
                  </div>

                  <div className='flex flex-col'>
                    <div className='text-2xl'>{coin.name}</div>
                    <div className='text-xl'>{coin.symbol}</div>
                  </div>

                </div>

                <div className='basis-[25%]'>
                  {coin.high_24h}
                </div>
                <div className='basis-[25%]'>
                  {coin.price_change_24h}
                </div>
                <div className='basis-[25%]'>
                  {coin.market_cap}
                </div>

              </div>
            )
          })
        }

      </div>

      <div className='flex gap-6 justify-center items-center'>
        <button onClick={() => setPage(page-1)} disabled={page===1} 
        className='btn btn-primary bg-amber-400 text-white text-2xl'>
          Prev
        </button>
        <button onClick={() => setPage(page+1)}
        className='btn btn-primary bg-amber-400 text-white text-2xl'>
          Next
        </button>
      </div>

    </div>
  )
}

export default CoinTable

// disabled={page===1} meand disable if page is 1[first]