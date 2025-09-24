import ErrorAlert from "../Alert-Daisy/ErrorAlert"
import {Line} from 'react-chartjs-2'
import {} from 

function CoinInformation({historicData, setDays, setCoinInterval}) {

  if(!historicData){
    return <ErrorAlert message='No data availabe' type='info' />
  }

  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 w-full md:w-3/4">

      <Line 
        data={{
          labels: [],
          datasets: [
            {
              data: [3, 5, 7, 9, 1]  // this i for line 1
            },
            {
              data: [9, 8, 2, 4, 5]  // this is for line 2
            }
        ],
          
        }}
      />


    </div>
  )
}

export default CoinInformation

// this Line components is from reactChartjs.