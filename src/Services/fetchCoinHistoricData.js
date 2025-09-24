import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinHistoricData(coinId, days = 7, interval, currency = 'usd'){
    try {
        const response = await axiosInstance.get(`/coins/${coinId}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
