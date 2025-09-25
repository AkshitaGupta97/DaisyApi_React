import React from 'react'
import CurrencyStore from '../zustand/store';
import { useQuery } from '@tanstack/react-query';
import { fetchCoinDetails } from '../Services/fetchCoinDetails';
// used in coinDetailsPage

function useFetchCoin(coinId) {
    const { currency } = CurrencyStore();
    const { isError, isLoading, data: coin } = useQuery({
        queryKey: ['coin', coinId],
        queryFn: () => fetchCoinDetails(coinId),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2
    })
    return {
        currency, isError, isLoading, coinId, coin
    }
}

export default useFetchCoin