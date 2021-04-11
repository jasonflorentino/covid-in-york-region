import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const ChartDailies = () => {

  const [data, setData] = useState([]);
  
  const fetchData = () => {
    const url = process.env.REACT_APP_API_URL + '/api';
    axios
      .get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchData();
  }, [])

  const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }

  const chartData = {
    labels: data.map(item => new Date(item.date).toLocaleDateString('en-US', dateOptions)),
    datasets: [{
      type: 'line',
      label: 'Active Cases',
      data: data.map(item => item.total_active),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 3
    },
    {
      type: 'line',
      label: 'In Hospital',
      data: data.map(item => item.hospitalized),
      fill: false,
      borderColor: 'rgb(255, 75, 192)',
      borderWidth: 3
    }]
  }

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  return <Line 
           data={chartData} 
           options={chartOptions}
          />;
}

export default ChartDailies