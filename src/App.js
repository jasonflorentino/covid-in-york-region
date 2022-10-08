import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import DailiesData from './data/dailies.json'

import ChartDailies from './components/ChartDailies/ChartDailies';
import QuickStats from './components/QuickStats/QuickStats';
import Loading from './components/Loading/Loading';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import './App.scss';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const fetchData = () => {
    setData(DailiesData)
    setLoading(false)
    setError(false)
    return;
    // const url = process.env.REACT_APP_API_URL + '/api';
    // axios
    //   .get(url)
    //   .then(res => {
    //     setData(res.data);
    //   })
    //   .then(() => setLoading(false))
    //   .catch(err => {
    //     setError(true);
    //     console.error(err);
    //   })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='App'>
      <h3>
        This app is no longer active! What follows is how it looked when I shut it down. Best Wishes! —Jason
      </h3>
      <Header />
      <main className='App__main'>
        {error ? <Error /> :
         loading ? <Loading /> : 
                   <>
                     <QuickStats data={data} />
                     <ChartDailies data={data} />
                   </>
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
