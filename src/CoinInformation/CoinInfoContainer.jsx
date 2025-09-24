
import { useState } from 'react';
import CurrencyStore from '../zustand/store'
import CoinInformation from './CoinInformation'
import { fetchCoinHistoricData } from '../Services/fetchCoinHistoricData';
import MyLoader from '../PageLoader/MyPageLoader';
import ErrorAlert from '../Alert-Daisy/ErrorAlert';

function CoinInfoContainer() {

    const {currency} = CurrencyStore();
    const [days, setDays] = useState(7);
    const [interval, setInterval] = useState('')

    const { data: historicData, isLoading, isError } = useQuery({
        queryKey: ['coinHistoricData', coinId, currency, days, interval],
        queryFn: () => fetchCoinHistoricData(coinId, interval, days, currency),
        cacheTime: 1000*60*2,
        staleTime: 1000*60*2
    });

    if(isLoading){
        return <MyLoader/>
    }
    if(isError){
        return <ErrorAlert  message='Error while fetching data' type='error'/>
    }


  return (
    <>
        <CoinInformation />
    </>
  )
}

export default CoinInfoContainer