import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

import chartOptions from '../../config/chartOptions';
import Loading from '../Loading/Loading';

const colorBlue = '#0081cb';
const colorRed = '#c50e29';

const ChartDailies = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  
  const fetchData = () => {
    const url = process.env.REACT_APP_API_URL + '/api';
    axios
      .get(url)
      .then(res => {
        setData(res.data);
      })
      .then(() => setLoading(false))
      .catch(err => {
        alert('There was an error loading the data');
        setLoading(false);
        console.error(err);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' }

  const chartData = {
    labels: data.map(item => new Date(item.date).toLocaleDateString('en-US', dateOptions)),
    datasets: [{
      type: 'line',
      label: 'Active Cases',
      data: data.map(item => item.total_active),
      fill: false,
      borderColor: colorBlue,
      backgroundColor: colorBlue,
      
    },
    {
      type: 'line',
      label: 'In Hospital & ICU',
      data: data.map(item => item.hospitalized + item.hospitalized_icu),
      fill: false,
      borderColor: colorRed,
      backgroundColor: colorRed,
    }]
  }

  return loading ? <Loading /> : 
                   <Line 
                     data={chartData} 
                     options={chartOptions}
                    />;
}

export default ChartDailies