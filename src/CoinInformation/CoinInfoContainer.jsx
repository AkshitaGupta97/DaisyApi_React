
import { useState } from 'react';
import CurrencyStore from '../zustand/store'
import CoinInformation from './CoinInformation'
import { fetchCoinHistoricData } from '../Services/fetchCoinHistoricData';
import MyLoader from '../PageLoader/MyPageLoader';
import ErrorAlert from '../Alert-Daisy/ErrorAlert';
import { useQuery } from '@tanstack/react-query';

function CoinInfoContainer({coinId}) {
 
    const {currency} = CurrencyStore();
    const [days, setDays] = useState(7);  // you can also change the days to 1
    const [interval, setCoinInterval] = useState('daily')

    const { data: historicData, isLoading, isError } = useQuery({
        queryKey: ['coinHistoricData', coinId,days, interval, currency],
        queryFn: () => fetchCoinHistoricData(coinId,days, interval, currency),
        cacheTime: 1000*60*2,
        staleTime: 1000*60*2
    });

    if(isLoading){
        return <MyLoader/>
    }
    if(isError){
        return <ErrorAlert  message='Error while fetching data' type='error'/>
    }
    console.log('coinId:', coinId);

  return (
    <>
         <p className="font-semibold text-3xl text-yellow-100 px-4">Coin Information</p>
        <CoinInformation 
        historicData={historicData} setDays={setDays} 
        setCoinInterval={setCoinInterval} days={days} currency={currency}/>
    </>
  )
}

export default CoinInfoContainer