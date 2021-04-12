import { Line } from 'react-chartjs-2';

import chartOptions from '../../config/chartOptions';

const activeColor = '#0081cb';
const hospitalColor = '#ffca28';

const ChartDailies = ({ data }) => {

  const dateOptions = {weekday: 'short', month: 'short', day: 'numeric'}

  const chartData = {
    labels: data.map(item => {
      let time = new Date(item.date).getTime();
      time += 1000 * 60 * 60 * 5; // Add 5 hours to epoch timestamp
      return new Date(time).toLocaleDateString('en-US', dateOptions);
    }),
    datasets: [{
      type: 'line',
      label: 'Active Cases',
      data: data.map(item => item.total_active),
      fill: false,
      borderColor: activeColor,
      backgroundColor: activeColor,
      
    },
    {
      type: 'line',
      label: 'In Hospital & ICU',
      data: data.map(item => item.hospitalized + item.hospitalized_icu),
      fill: false,
      borderColor: hospitalColor,
      backgroundColor: hospitalColor,
    }]
  }

  return <Line data={chartData} options={chartOptions} />;
}

export default ChartDailies