import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
import { fetchCoinDetails } from '../Services/fetchCoinDetails';
import CurrencyStore from '../zustand/store';

function CoinDetailsPage() {
  const { coinId } = useParams();
  const {currency} = CurrencyStore();
  const { isError, isLoading, data: coin } = useQuery({
    queryKey: ['coin', coinId],
    queryFn: () => fetchCoinDetails(coinId),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2
  })

  if (isLoading) {
    return <div className='font-semibold text-orange-400 text-3xl'>Loading...</div>
  }
  if (isError) {
    return <div className='text-3xl'>Error :  Something went wrong...</div>
  }

  return (
    <div className='flex flex-col md:flex-row'>
      
      <div className='md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500'>
        <img className='h-52 mb-5'
          src={coin?.image?.large} alt={coin?.name} />

        <h1 className='text-3xl font-bold mb-5'>{coin?.name}</h1>
        <p className='w-full font-bold  px-6'>{coin?.description?.en}</p>

        <div className='w-full flex flex-col ml-2 md:flex-row md:justify-around'>
            <div className='flex items-center mb-4 md:mb-0 mt-2'>
                <h2 className='text-xl font-bold'>Rank : </h2>
                <span className='ml-3 text-2xl text-red-400'>
                  {coin?.market_cap_rank}
                </span>
            </div>

            <div className='flex items-center mb-4 md:mb-0 mt-2'>
               <h2 className='text-2xl font-bold'>Current Price : </h2>
                <span className='ml-3 text-xl text-yellow-400'>
                  {coin?.market_data.current_price[currency]}
                </span>
            </div>
        </div>

      </div>

      <div className='md:w-2/3 w-full p-6'>
        <p className='font-semibold text-emerald-100'>Coin Information</p>
      </div>

    </div>
  )
}

export default CoinDetailsPage

// here we have destructured data:coin. data to coin