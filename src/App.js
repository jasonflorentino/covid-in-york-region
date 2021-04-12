import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ChartDailies from './components/ChartDailies/ChartDailies';
import QuickStats from './components/QuickStats/QuickStats';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import './App.scss';

const App = () => {

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

  return (
    <div className='App'>
      <Header />
      <main className='App__main'>
        {loading ? <Loading /> : 
                   <>
                     <QuickStats data={data} />
                     <ChartDailies data={data} />
                   </>
        }
      </main>
    </div>
  );
}

export default App;
