
import CoinInformation from './CoinInformation'
import MyLoader from '../PageLoader/MyPageLoader';
import ErrorAlert from '../Alert-Daisy/ErrorAlert';
import useFetchCoinHistory from '../hooks/useFetchCoinHistory';

//const [historicData, isError, isLoading, currency, days, setDays, setCoinInterval] = useFetchCoinHistory(coinId); as we have created a used custom hook,
// this hook is created in different file, if in case we want different ui in other pages but logic is same


function CoinInfoContainer({coinId}) {
 
     const {historicData, isError, isLoading, currency, days, setDays, setCoinInterval} = useFetchCoinHistory(coinId); 

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