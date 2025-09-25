import React, { useState } from 'react'
import CurrencyStore from '../zustand/store';
import { useQuery } from '@tanstack/react-query';
import { fetchCoinHistoricData } from '../Services/fetchCoinHistoricData';

// used in coinInfoContainer

function useFetchCoinHistory(coinId) {
  const {currency} = CurrencyStore();
    const [days, setDays] = useState(7);  // you can also change the days to 1
    const [interval, setCoinInterval] = useState('daily')

    const { data: historicData, isLoading, isError } = useQuery({
        queryKey: ['coinHistoricData', coinId,days, interval, currency],
        queryFn: () => fetchCoinHistoricData(coinId,days, interval, currency),
        cacheTime: 1000*60*2,
        staleTime: 1000*60*2
    });

    return {
        historicData, isLoading, isError, setDays, setCoinInterval, days, currency
    }
}

export default useFetchCoinHistory