import ErrorAlert from "../Alert-Daisy/ErrorAlert"
import { Line } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
import { chartDays } from "../helpers/Constant-Api"


 Chart.register(CategoryScale)

function CoinInformation({ historicData, setDays, setCoinInterval, days, currency }) {
  if (!historicData) {
    return <ErrorAlert message='No data availabe' type='info' />
  }

  
  const handleDayChange = (e) => {
    console.log(e.target.options[e.target.selectedIndex].value);
    const daysSelected = e.target.options[e.target.selectedIndex].value;
    if(daysSelected == 1){
      setCoinInterval?.('hourly');
    }
    else {
      setCoinInterval?.('daily')
    }
    setDays(daysSelected);
    
  }


  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 w-full md:w-3/4">

      <div className="h-[300px] w-full">
        <Line
          data={{
            labels: historicData.prices.map(coinPrice => {
              let date = new Date(coinPrice[0]); // converting UNIX timestamp to date
              let time = date?.getHours() > 12 ? `${date?.getHours() - 12}: ${date?.getMinutes()} PM` :
                `${date?.getHours()}:${date?.getMinutes()} AM`;   // here we are converting 24hr to 12hr time
              return days === 1 ? time : date.toLocaleDateString(); // if chart is for one day, then give time else give date to normal format
            }),
            datasets: [
              {
                label: `Price in (Past ${days} ${days === 1 ? 'Day' : 'Days'}) in ${currency?.toUpperCase()}`,
                data: historicData.prices.map(coinPrice => coinPrice[1])
              }
            ],

          }}

          options={{
            responsive: true,
            maintainAspectRatio: false, // it will allow to resize the chart
            elements: {
              point: {
                radius: 0
              }
            }
          }}
        />
      </div>

      <div className="flex justify-center mt-5 w-full">
        <select onChange={handleDayChange}
        className="select select-secondary w-full max-w-xs"> 
          {
            chartDays.map((day, index) => {
              return (
                <option selected={days == day.value} key={index} value={day.value}>{day.label}</option>
              )
            })
          }
        </select>

      </div>

    </div>
  )
}

export default CoinInformation

// this Line components is from reactChartjs.
// options helps to give better  ui, as it remove the radius and give clean chart
// <select className="select select-secondary w-full max-w-xs">  -> from daisy-ui