import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinHistoricData(id, days = 7, interval, currency = 'usd'){
   
    try{
        const response = await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`)
       // console.log(response);
        return response.data;
        
    }
    catch(error){
        console.log(error);
        return null;
        
    }
}