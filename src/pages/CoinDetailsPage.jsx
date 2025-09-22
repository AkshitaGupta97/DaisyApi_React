import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
import { fetchCoinDetails } from '../Services/fetchCoinDetails';

function CoinDetailsPage() {
    const {coinId} = useParams();
    const {isError, isLoading, data} =  useQuery(['coin', coinId], () => fetchCoinDetails(coinId));

    if(isLoading){
      return <div className='font-semibold text-orange-400 text-3xl'>Loading...</div>
    }
    if(isError){
      return <div className='text-3xl'>Error :  Something went wrong...</div>
    }

  return (
    <div>
        <h2>coin details page</h2>
    </div>
  )
}

export default CoinDetailsPage